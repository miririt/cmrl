import Event from "./event.js";

/**
 * 역사 클래스
 * @class
 * @classdesc 게임 내에서 이벤트의 수행 및 되돌리기를 담당
 */
export default class History {

  /**
   * 새 History 생성
   * @param {Game} gameInstance - 이 역사가 연결되어 있는 게임
   * @param {Array<Event>} events - 이벤트 목록
   */
  constructor(gameInstance, events) {
    this._gameInstance = gameInstance;
    this._events = events.slice();
    this._now = new Date();
    this._eventIdx = 0;
  }

  /**
   * History 불러오기
   * @param {Game} gameInstance - 게임 인스턴스
   * @param {string} fromFile - 역사를 불러올 파일명
   * @returns {Promise<History>} - 불러온 History를 반환하는 Promise
   */
  static async load(gameInstance, fromFile) {
    const fileJson = await fetch(fromFile).then(resp => resp.json());
    const events = fileJson.map(event => Event.fromJson(gameInstance, event));

    return new History(gameInstance, events);
  }

  /**
   * 시간 빨리감기
   * @param {number} time - 빨리감을 시간(단위: ms)
   */
  forward(time = 86400000) {
    this.slip(this._now.getTime() + time);
  }

  /**
   * 되감기
   * @param {number} time - 되감을 시간(단위: ms)
   */
  rewind(time = 86400000) {
    this.slip(this._now.getTime() - time);
  }

  /**
   * 원하는 시간으로 이동
   * @param {number} time - 이동할 시간(단위: ms)
   */
  slip(time) {
    this._now = new Date(time);
    const newIdx = this._events.findIndex(event => !event.started());
    this._events.slice(this._eventIdx, newIdx).forEach(event => event.forward());
    this._eventIdx = newIdx;
  }

  /**
   * 이벤트를 기준으로 되감기
   * @param {number} num - 되감을 이벤트 수
   */
  rewindEvent(num) {
    this._events.slice(this._eventIdx - num, this._eventIdx).forEach(event => event.rewind());
    this._eventIdx -= num;
  }

  /**
   * 현재 시간을 얻어옴
   * @returns {Date} - 현재 시간
   */
  now() {
    return this._now;
  }
}
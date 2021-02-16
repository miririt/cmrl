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
   * @param {Array<Object>} events - 이벤트 목록
   */
  constructor(gameInstance, events) {
    this._gameInstance = gameInstance;
    this._events = events.slice();
  }

  /**
   * History 불러오기
   * @param {Game} gameInstance - 게임 인스턴스
   * @param {string} fromFile - 역사를 불러올 파일명
   * @returns {Promise<History>} - 불러온 History를 반환하는 Promise
   */
  async static load(gameInstance, fromFile) {
    const fileJson = await fetch(fromFile).then(resp => resp.json());
    const events = fileJson.map(event => Event.fromJson(this._gameInstance, event));

    return new History(gameInstance, events);
  }
}
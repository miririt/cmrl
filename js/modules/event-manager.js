import Event from "../core/event.js";
import CreateManager from "./manager.js";

/**
 * 이벤트 매니저 클래스
 * @class
 * @classdesc 게임 내에서 이벤트의 수행 및 되돌리기를 담당
 */
export default class EventManager extends CreateManager(Event) {

  /**
   * 새 EventManager 생성
   * @param {Game} gameInstance - 이 이벤트 매니저가 연결되어 있는 게임
   * @param {Array<Event>} events - 이벤트 목록
   */
  constructor(gameInstance, events) {
    super(gameInstance, events);

    this._events = this._objects;
    this._now = new Date();
    this._eventIdx = 0;
  }

  /**
   * 시간 빨리감기
   * @param {number} time - 빨리감을 시간(단위: ms)
   */
  forward(time = 86400000) {
    this.slip(this._now.getTime() + time);
  }

  /**
   * 시간 되감기
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
    const newIdx = this._events.findIndex(event => !this.isEventStarted(event));
    this._events.slice(this._eventIdx, newIdx).forEach(event => this.forwardEvent(event));
    this._eventIdx = newIdx;
  }

  /**
   * 이벤트를 기준으로 되감기
   * @param {number} count - 되감을 이벤트 수
   */
  rewindEventCount(count) {
    this._events.slice(this._eventIdx - count, this._eventIdx).forEach(event => this.rewindEvent(event));
    this._eventIdx -= count;
  }

  /**
   * 현재 시각을 기준으로 이 이벤트가 이전에 활성화되었는지 확인함
   * @param {Event} event - 확인할 이벤트
   * @returns {boolean} true면 현재 시각을 기준으로 과거에 이 이벤트가 발생할 수 있었음
   */
  isEventStarted(event) {
    const nowTime = this._gameInstance.now().getTime();
    return event._timeRange[0] <= nowTime;
  }

  /**
   * 현재 시각을 기준으로 이 이벤트가 활성화되었는지 확인함
   * @param {Event} event - 확인할 이벤트
   * @returns {boolean} true면 현재 시각을 기준으로 조건 충족시 이 이벤트가 발생할 수 있음
   */
  isEventAvailable(event) {
    const nowTime = this._gameInstance.now().getTime();
    return event._timeRange[0] <= nowTime && nowTime <= event._timeRange[1];
  }

  /**
   * 해당 이벤트를 확인하고 조건에 맞을 경우 실행함
   * @param {Event} event - 확인할 이벤트
   */
  forwardEvent(event) {
    if(event._conditions.every(condition => this._gameInstance.checkCondition(condition))) {
      event._effects.forEach(effect => this._gameInstance.doEffect(effect));
      event._achievedTime = event._gameInstance.now();
    }
  }

  /**
   * 해당 이벤트를 확인하고 조건에 맞을 경우 취소함
   * @param {Event} event - 확인할 이벤트
   */
  rewindEvent(event) {
    if(event._achievedTime !== null) {
      event._effects.forEach(effect => effect.do());
      event._achievedTime = null;
    }
  }

  /**
   * 현재 시간을 얻어옴
   * @returns {Date} - 현재 시간
   */
  now() {
    return this._now;
  }
}
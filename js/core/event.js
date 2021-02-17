import Condition from "./condition.js";
import Effect from "./effect.js";

/**
 * 이벤트 클래스
 * @class
 * @classdesc 게임 내에서 발생하는 모든 종류의 이벤트를 담당
 */
export default class Event {

  /**
   * 새 Event 생성
   * @param {Game} gameInstance - 이벤트가 연결되어 있는 게임
   * @param {Array<number>} timeRange - 이벤트가 발생하는 시간(시작과 끝)
   * @param {Condition} conditions - 이벤트가 발생하기 위한 조건들
   * @param {Effect} effects - 이벤트가 발생할 때의 효과들
   */
  constructor(gameInstance, timeRange, conditions, effects) {
    this._gameInstance = gameInstance;
    this._timeRange = timeRange;
    this._condition = new Condition(gameInstance, conditions);
    this._effect = new Effect(gameInstance, effects);

    this._achievedTime = null;
  }

  /**
   * JSON에서 이벤트 생성
   * @param {Game} gameInstance - 이벤트가 연결되어 있는 게임
   * @param {Object} jsonEvent - 이벤트 객체
   * @param {Array<Object>} jsonEvent.conditions - 이벤트 조건들
   * @param {Array<Object>} jsonEvent.effects - 이벤트 효과들
   */
  static fromJson(gameInstance, jsonEvent) {
    return new Event(
      gameInstance,
      jsonEvent.timeRange,
      jsonEvent.conditions,
      jsonEvent.effects
    );
  }

  /**
   * 현재 시각을 기준으로 이 이벤트가 이전에 활성화되었는지 확인함
   * @returns {boolean} true면 현재 시각을 기준으로 과거에 이 이벤트가 발생할 수 있었음
   */
  started() {
    const nowTime = this._gameInstance.now().getTime();
    return this._timeRange[0] <= nowTime;
  }

  /**
   * 현재 시각을 기준으로 이 이벤트가 활성화되었는지 확인함
   * @returns {boolean} true면 현재 시각을 기준으로 조건 충족시 이 이벤트가 발생할 수 있음
   */
  available() {
    const nowTime = this._gameInstance.now().getTime();
    return this._timeRange[0] <= nowTime && nowTime <= this._timeRange[1];
  }

  /**
   * 해당 이벤트를 확인하고 조건에 맞을 경우 실행함
   */
  forward() {
    if(this._condition.check()) {
      this._effect.do();
      this._achievedTime = this._gameInstance.now();
    }
  }

  /**
   * 해당 이벤트를 확인하고 조건에 맞을 경우 취소함
   */
  rewind() {
    if(this._achievedTime !== null) {
      this._effect.undo();
      this._achievedTime = null;
    }
  }
}
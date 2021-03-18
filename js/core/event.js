import ISerializable from "./serializable.js";

/**
 * 이벤트 클래스
 * @class
 * @classdesc 게임 내에서 발생하는 모든 종류의 이벤트를 담당
 */
export default class Event extends ISerializable {

  /**
   * 새 Event 생성
   * @param {Array<number>} timeRange 이벤트가 발생하는 시간(시작과 끝)
   * @param {Array<string>} conditions 이벤트가 발생하기 위한 조건의 이름들
   * @param {Array<string>} effects 이벤트가 발생할 때의 효과의 이름들
   */
  constructor(timeRange, conditions, effects) {
    super();
    this._timeRange = timeRange;
    this._conditions = conditions;
    this._effects = effects;

    this._achievedTime = null;
  }

  /**
   * JSON에서 이벤트 생성
   * @param {Object} jsonEvent 이벤트 JSON
   * @return {Event} 이벤트 객체
   */
  static fromJson(jsonEvent) {
    return new this(
      jsonEvent.timeRange,
      jsonEvent.conditions,
      jsonEvent.effects
    );
  }

  /**
   * 이벤트에서 JSON 생성
   * @return {Object} 이벤트 JSON
   */
  static toJson() {
    return {
      'timeRange': this._timeRange,
      'conditions': this._conditions,
      'effects': this._effects
    };
  }
}
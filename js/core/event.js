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
   * @param {Array<Condition>} conditions - 이벤트가 발생하기 위한 조건들
   * @param {Array<Effect>} effects - 이벤트가 발생할 때의 효과
   */
  constructor(gameInstance, conditions, effects) {
    this._gameInstance = gameInstance;
    this._conditions = conditions.slice();
    this._effects = effects.slice();
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
      new Condition(gameInstance, jsonEvent.conditions),
      new Effect(gameInstance, jsonEvent.effects)
    );
  }
}
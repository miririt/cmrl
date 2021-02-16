
/**
 * 이벤트에 사용될 조건 클래스
 * @class
 * @classdesc 어떤 이벤트가 발생하기 위한 조건을 의미함
 */
export default class Condition {

  /**
   * 새 Condition 생성
   * @param {Game} gameInstance - 조건이 연결되어 있는 게임
   * @param {Array<Object>} rules - 조건 목록
   */
  constructor(gameInstance, rules) {
    this._gameInstance = gameInstance;
    this._rules = rules.slice();
  }

  /**
   * 조건이 달성되었는지 확인함
   * @returns {boolean} - true일 경우 이 조건은 달성되었음
   */
  check() {
    return this._rules.every(rule => {
      /**
       * @todo rule check 작성할것
       */
    });
  }
}
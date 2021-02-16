
/**
 * 효과 클래스
 * @class
 * @classdesc 이벤트 발생 시 작용하는 효과를 의미함
 */
export default class Effect {

  /**
   * 새 Effect 생성
   * @param {Game} gameInstance - 효과가 연결되어 있는 게임
   * @param {Array<Object>} rules - 효과 목록
   */
  constructor(gameInstance, rules) {
    this._gameInstance = gameInstance;
    this.rules = rules.slice();
  }

  /**
   * 효과를 발생시킴
   */
  do() {
    /**
     * @todo effect do 작성할것
     */
  }

  /**
   * 효과를 취소시킴
   */
  undo() {
    /**
     * @todo effect undo 작성할것
     */
  }
}
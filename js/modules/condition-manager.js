import Condition from "../core/condition.js";
import CreateManager from "./manager.js";

/**
 * 조건 매니저 클래스
 * @class
 * @classdesc 게임 내에서 조건의 생성 및 정보 저장을 담당
 */
export default class ConditionManager extends CreateManager(Condition) {
  
  /**
   * 새 ConditionManager 생성
   * @param {Game} gameInstance 이 조건 매니저가 연결되어 있는 게임
   * @param {Array<Condition>} conditions 조건 목록
   */
  constructor(gameInstance, conditions) {
    super(gameInstance, conditions);

    this._conditions = this._objects;
  }

  /**
   * 대상 값이 조건을 만족하는지 확인
   * @param {number} targetValue 조건을 충족하는지 확인할 값
   * @param {Object} data 조건
   * @param {string} data.operator 조건의 대소 관계(">", "=", "<", ">=", "<=")
   * @param {Object} data.value 조건의 값
   * @returns {boolean} true일 경우 조건을 만족했음
   */
  _checkRange(targetValue, data) {
    const conditionText = `${targetValue} ${data.operator} ${data.value}`;

    /**
     * @todo eval 없이 조건 확인하도록 수정할 것
     */

    return eval(conditionText);
  }

  /**
   * 조건이 달성되었는지 확인함
   * @param {string} conditionName 확인할 조건의 이름
   * @returns {boolean} true일 경우 이 조건은 달성되었음
   */
  checkCondition(conditionName) {
    const condition = this.getObject(conditionName);

    if(undefined === condition) {
      return false;
    }

    switch(condition.type) {
      case 'Money':
        const targetValue = this._gameInstance.characterManager.getObject(condition.data.character)._money;
        return this._checkRange(targetValue, condition.data);
    }
  }
}
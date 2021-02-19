import Condition from "../core/condition.js";
import CreateManager from "./manager.js";

/**
 * 조건 매니저 클래스
 * @class
 * @classdesc 게임 내에서 조건의 생성 및 정보 저장을 담당
 */
export default class ConditionManager extends CreateManager(Condition) {
  
  /**
   * 조건이 달성되었는지 확인함
   * @param {string} conditionName - 확인할 조건의 이름
   * @returns {boolean} - true일 경우 이 조건은 달성되었음
   */
  checkCondition(conditionName) {
    /**
     * @todo rule check 작성할것
     */
  }
}
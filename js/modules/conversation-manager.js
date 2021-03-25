import Conversation from "../core/conversation.js";
import CreateManager from "./manager.js";

/**
 * 대화 매니저 클래스
 * @class
 * @classdesc 게임 내에서 대화의 생성 및 정보 저장을 담당
 */
export default class ConditionManager extends CreateManager(Conversation) {

  /**
   * 새 ConditionManager 생성
   * @param {Game} gameInstance 이 조건 매니저가 연결되어 있는 게임
   * @param {Array<Condition>} conversations 조건 목록
   */
  constructor(gameInstance, conversations) {
    super(gameInstance, conversations);

    this._conversations = this._objects;
  }
}
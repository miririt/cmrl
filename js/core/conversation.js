import ISerializable from "./serializable.js";
import IType from "./type.js";

/**
 * 대화 클래스
 * @class
 * @classdesc 대화 및 서술을 담당
 */
export default class Conversation extends ISerializable {

  /**
   * 대화의 종류를 나타냄
   * @readonly
   * @enum {Symbol}
   */
  static TYPE = IType.createType('Narration', 'Choice', 'Quest');

  /**
   * 새 Conversation 생성
   * @param {Conversation.TYPE} type 대화 타입
   * @param {string} text 대화 텍스트
   * @param {Array<string>} [options] 대화 선택지
   */
  constructor(type, text, options = null) {
    super();
    this.type = type;
    this.text = text;
    this.options = options;
  }

  /**
   * JSON에서 대화 생성
   * @param {Object} jsonConversation 대화 JSON
   * @returns {Conversation} 대화 객체
   */
  static fromJson(jsonConversation) {
    return new this(
      Conversation.TYPE.fromString(jsonConversation.type),
      jsonEffect.text,
      jsonEffect.options
    );
  }

  /**
   * 대화에서 JSON 생성
   * @returns {Object} 대화 JSON
   */
  toJson() {
    return {
      'type': Conversation.TYPE.toString(this.type),
      'text': this.text,
      'options': this.options
    }
  }
}
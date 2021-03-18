import ISerializable from "./serializable.js";

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
  static TYPE = Object.freeze({
    Narration: Symbol(),
    Choice: Symbol(),
    /**
     * 문자열을 Conversation.TYPE으로 변환
     * @param {string} string 타입 스트링
     * @returns {Conversation.TYPE} Conversation.TYPE으로 변환된 타입
     */
    fromString: function (string) {
      switch(string) {
        case 'narration':
          return this.Narration;
        case 'choice':
          return this.Choice;
      }
    },
    /**
     * Conversation.TYPE을 문자열로 변환
     * @param {Conversation.TYPE} type 대화 타입
     * @returns {string} 스트링으로 변환된 Conversation.TYPE
     */
    toString: function (type) {
      switch(type) {
        case this.Narration:
          return 'narration';
        case thic.Choice:
          return 'choice';
      }
    }
  });

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
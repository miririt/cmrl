import ISerializable from "./serializable.js";

/**
 * 효과 클래스
 * @class
 * @classdesc 이벤트 발생 시, 아이템 사용시, 스킬 사용시 작용하는 효과를 의미함
 */
export default class Effect extends ISerializable {

  /**
   * 새 Effect 생성
   * @param {string} name - 효과 이름
   * @param {string} type - 효과 타입
   * @param {Object} data - 효과 정보
   */
  constructor(name, type, data) {
    super();
    this.name = name;
    this.type = type;
    this.data = data;
  }

  /**
   * JSON에서 효과 생성
   * @param {Object} jsonEffect - 효과 객체
   */
  static fromJson(jsonEffect) {
    return new this(
      jsonEffect.name,
      jsonEffect.type,
      jsonEffect.data
    );
  }
}
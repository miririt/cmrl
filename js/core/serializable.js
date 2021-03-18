
/**
 * 직렬화 가능한 원형 클래스
 * @class
 * @classdesc 직렬화 가능한 클래스
 */
export default class ISerializable {

  /**
   * JSON에서 객체를 생성
   * @virtual
   * @param {Object} json 객체의 정보를 담고 있는 JSON
   * @returns {Serializable} 생성된 객체
   */
  static fromJson(json) {
    return new this(json);
  }

  /**
   * 객체를 직렬화하여 JSON으로 변환
   * @virtual
   * @returns {Object} JSON으로 직렬화된 객체
   */
  toJson() {
    return {};
  }
}
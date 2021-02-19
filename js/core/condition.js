import ISerializable from "./serializable.js";

/**
 * 이벤트에 사용될 조건 클래스
 * @class
 * @classdesc 어떤 이벤트가 발생하기 위한 조건을 의미함
 */
export default class Condition extends ISerializable {

  /**
   * 새 Condition 생성
   * @param {string} name - 조건 이름
   * @param {string} type - 조건 타입
   * @param {Object} data - 조건 정보
   */
  constructor(name, type, data) {
    super();
    this.name = name;
    this.type = type;
    this.data = data;
  }

  /**
   * JSON에서 조건 생성
   * @param {Object} jsonCondition - 조건 객체
   */
  static fromJson(jsonCondition) {
    return new this(
      jsonCondition.name,
      jsonCondition.type,
      jsonCondition.data
    );
  }

}
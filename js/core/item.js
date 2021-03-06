import ISerializable from "./serializable.js";
import IType from "./type.js";

/**
 * 아이템 클래스
 * @class
 * @classdesc 하나의 아이템을 담당
 */
export default class Item {

  /**
   * 아이템의 종류를 나타냄
   * @readonly
   * @enum {Symbol}
   */
  static TYPE = IType.createType('Consumable', 'Equipment', 'Key');

  /**
   * 아이템 템플릿 클래스
   * @class
   * @classdesc 아이템 템플릿을 담당
   */
  static Template = class extends ISerializable {

    /**
     * 새 Item.Template 생성
     * @param {Object} data 아이템 정보
     * @param {Item.TYPE} data.type 아이템 종류
     * @param {string} data.name 아이템 이름
     * @param {number} data.maxQuantity 아이템 최대 수량
     */
    constructor(data = {
      type: Item.TYPE.Consumable,
      name: null,
      maxQuantity: 1
    }) {
      super();
      this.type = data.type;
      this.name = data.name;
      this.maxQuantity = data.maxQuantity;
    }

    /**
     * JSON에서 아이템 템플릿 생성
     * @param {Object} jsonItem 아이템 템플릿 JSON
     * @param {Item.TYPE} jsonItem.type 아이템 종류
     * @param {string} jsonItem.name 아이템 이름
     * @param {number} jsonItem.maxQuantity 아이템 최대 수량
     * @returns {Item.Template} 아이템 템플릿 객체
     */
    static fromJson(jsonItem) {
      return new this({
        type: Item.TYPE.fromString(jsonItem.type),
        name: jsonItem.name,
        maxQuantity: jsonItem.maxQuantity
      });
    }

    /**
     * 아이템 템플릿에서 JSON 생성
     * @return {Object} 아이템 템플릿 JSON
     */
    toJson() {
      return {
        'type': Item.TYPE.toString(this.type),
        'name': this.name,
        'maxQuantity': this.maxQuantity
      };
    }

    /**
     * 이 템플릿에서 새 아이템 객체 생성
     * @param {number} quantity 생성된 아이템의 개수
     * @returns {Item} 이 템플릿을 바탕으로 생성된 아이템
     */
    build(quantity) {
      return Item.fromTemplate(this, quantity);
    }
  };

  /**
   * 새 Item 생성
   * @param {Object} data 아이템 정보
   * @param {Item.TYPE} data.type 아이템 종류
   * @param {string} data.name 아이템 이름
   * @param {number} data.quantity 아이템 수량
   * @param {number} data.maxQuantity 아이템 최대 수량
   */
  constructor(data = {
    type: Item.TYPE.Consumable,
    name: null,
    quantity: 1,
    maxQuantity: 1
  }) {
    this.type = data.type;
    this.name = data.name;
    this.quantity = data.quantity;
    this.maxQuantity = data.maxQuantity;
  }

  /**
   * JSON에서 아이템 생성
   * @param {Object} jsonItem 아이템 JSON
   * @param {Item.TYPE} jsonItem.type 아이템 종류
   * @param {string} jsonItem.name 아이템 이름
   * @param {number} jsonItem.quantity 아이템 수량
   * @param {number} jsonItem.maxQuantity 아이템 최대 수량
   * @returns {Item} 아이템 객체
   */
  static fromJson(jsonItem) {
    return new this({
      type: Item.TYPE.fromString(jsonItem.type),
      name: jsonItem.name,
      quantity: jsonItem.quantity,
      maxQuantity: jsonItem.maxQuantity
    });
  }

  /**
   * 아이템에서 JSON 생성
   * @return {Object} 아이템 JSON
   */
  static toJson() {
    return {
      'type': Item.TYPE.toString(this.type),
      'name': this.name,
      'quantity': this.quantity,
      'maxQuantity': this.maxQuantity
    };
  }

  /**
   * 아이템 템플릿에서 아이템 생성
   * @param {Item.Template} itemTemplate 아이템 템플릿
   * @param {number} quantity 아이템 개수
   * @returns {Item}
   */
  static fromTemplate(itemTemplate, quantity = 1) {
    return new this({
      type: itemTemplate.type,
      name: itemTemplate.name,
      quantity: quantity,
      maxQuantity: itemTemplate.maxQuantity
    });
  }

  /**
   * 아이템 개수 추가
   * @param {number} quantity 추가할 개수
   * @returns {number} 총 아이템 중첩 개수
   */
  add(quantity) {
    this.quantity += quantity;
    if(this.quantity > this.maxQuantity) this.quantity = this.maxQuantity;

    return this.quantity
  }
};
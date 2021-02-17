
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
  static TYPE = Object.freeze({
    Consumable: Symbol(),
    Equipment: Symbol(),
    Key: Symbol()
  });

  /**
   * 새 Item 생성
   * @param {Object} data - 아이템 정보
   * @param {Item.TYPE} type - 아이템 종류
   * @param {string} name - 아이템 이름
   * @param {number} quantity - 아이템 수량
   * @param {number} maxQuantity - 아이템 최대 수량
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
   * 아이템 개수 추가
   * @param {number} count - 추가할 개수
   * @returns {number} - 총 아이템 중첩 개수
   */
  add(count) {
    this.quantity += count;
    if(this.quantity > this.maxQuantity) this.quantity = this.maxQuantity;

    return this.quantity
  }
};
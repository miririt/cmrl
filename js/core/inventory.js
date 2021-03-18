import Item from "./item.js";
import ISerializable from "./serializable.js";

/**
 * 인벤토리 클래스
 * @class
 * @classdesc 캐릭터의 인벤토리를 담당
 */
export default class Inventory extends ISerializable {
  /**
   * 새 Inventory 생성
   * 
   * @param {Array<Item>} list 아이템 리스트
   */
  constructor(list) {
    super();
    this._list = list;
  }

  /**
   * 아이템을 인벤토리에 추가함
   * @param {string} query 아이템 이름
   * @param {number} quantity 추가할 수량
   */
  add(query, quantity = 1) {
    const existingItem = this._list.find(existing => existing.name === query);
    if(existingItem) {
      existingItem.add(quantity);
    }
  }
};
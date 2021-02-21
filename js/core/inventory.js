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
   * @param {Array<Item>} list - 아이템 리스트
   */
  constructor(list) {
    this._list = list;
  }

  add(item, count = 1) {
    const existingItem = this._list.find(existing => existing.name === item.name);
    if(existingItem) {
      existingItem.add(count);
    }
  }

  /**
   * JSON에서 인벤토리 생성
   * @param {Object} jsonCharacter - 캐릭터 객체
   */
  static fromJson(jsonInventory) {
    return new this(jsonInventory.map(inventoryItem => {
      return Item.Template.fromJson(inventoryItem).build(inventoryItem.quantity);
    }));
  }
};
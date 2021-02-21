import Inventory from "./inventory.js";
import ISerializable from "./serializable.js";

/**
 * 캐릭터 클래스
 * @class
 * @classdesc 하나의 캐릭터를 담당
 */
export default class Character extends ISerializable {

  /**
   * 새 Character 생성
   * @param {string} name - 캐릭터 이름
   * @param {number} money - 캐릭터 소지금
   * @param {Object} jsonInventory - 캐릭터 인벤토리 JSON
   */
  constructor(name, money, jsonInventory) {
    this._name = name;
    this._inventory = Inventory.fromJson(jsonInventory);
    this._money = money;
  }

  /**
   * 캐릭터에게 아이템 지급
   * @param {Item} item 
   */
  giveItem(item) {
    this._inventory.add(item);
  }

  /**
   * JSON에서 캐릭터 생성
   * @param {Object} jsonCharacter - 캐릭터 객체
   */
  static fromJson(jsonCharacter) {
    return new this(
      jsonCharacter.name,
      jsonCharacter.money,
      jsonCharacter.inventory
    );
  }
}
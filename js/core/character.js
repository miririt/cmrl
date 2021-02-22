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
   * @param {Object} inventory - 캐릭터 인벤토리
   */
  constructor(name, money, inventory) {
    this._name = name;
    this._inventory = new Inventory(inventory);
    this._money = money;
  }

  /**
   * 캐릭터에게 아이템 지급
   * @param {string} query - 아이템 이름
   * @param {number} quantity - 지급할 수량
   */
  giveItem(query, quantity = 1) {
    this._inventory.add(query, quantity);
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
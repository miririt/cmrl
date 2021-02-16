import Inventory from "./inventory";

/**
 * 캐릭터 클래스
 * @class
 * @classdesc 하나의 캐릭터를 담당
 */
export default class Character {

  /**
   * 새 Character 생성
   * @param {Game} gameInstance - 이 캐릭터가 연결되어 있는 게임
   */
  constructor(gameInstance) {
    this._gameInstance = gameInstance;
    this._inventory = new Inventory();
  }
}
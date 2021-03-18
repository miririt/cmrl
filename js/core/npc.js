import Character from "./character.js";

/**
 * NPC 클래스
 * @class
 * @classdesc 하나의 NPC를 담당
 */
export default class NPC extends Character {

  /**
   * 새 Character 생성
   * @param {Game} gameInstance 이 캐릭터가 연결되어 있는 게임
   */
  constructor(gameInstance) {
    super(gameInstance);
  }
};
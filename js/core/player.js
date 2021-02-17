import Character from "./character.js";

/**
 * 플레이어 클래스
 * @class
 * @classdesc 플레이어를 담당
 */
export default class Player extends Character {

  /**
   * 새 Character 생성
   * @param {Game} gameInstance - 이 캐릭터가 연결되어 있는 게임
   */
  constructor(gameInstance) {
    super(gameInstance);
  }
};
import Character from "./character.js";
/**
 * 플레이어 클래스
 * @class
 * @classdesc 플레이어를 담당
 */
export default class Player extends Character {

  /**
   * 새 Character 생성
   */
  constructor() {
    super('Player', 0, []);
  }
};
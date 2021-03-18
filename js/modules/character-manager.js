import Character from "../core/character.js";
import Player from "../core/player.js";
import CreateManager from "./manager.js";

/**
 * 캐릭터 매니저 클래스
 * @class
 * @classdesc 게임 내에서 캐릭터 생성 및 정보 저장을 담당
 */
export default class CharacterManager extends CreateManager(Character) {
  
  /**
   * 새 CharacterManager 생성
   * @param {Game} gameInstance 이 조건 매니저가 연결되어 있는 게임
   * @param {Array<Condition>} conditions 조건 목록
   */
  constructor(gameInstance, conditions) {
    super(gameInstance, conditions);

    this._player = new Player();
    this._characters = this._objects;
  }
}
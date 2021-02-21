import Character from "../core/character.js";
import CreateManager from "./manager.js";

/**
 * 캐릭터 매니저 클래스
 * @class
 * @classdesc 게임 내에서 캐릭터 생성 및 정보 저장을 담당
 */
export default class CharacterManager extends CreateManager(Character) {
  
}
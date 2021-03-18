import ConditionManager from "./modules/condition-manager.js";
import EffectManager from "./modules/effect-manager.js";
import EventManager from "./modules/event-manager.js";
import ItemManager from "./modules/item-manager.js";
import Player from "./core/player.js";
import CharacterManager from "./modules/character-manager.js";

/**
 * 게임 클래스
 * @class
 * @classdesc 게임 인스턴스
 * 
 * @property {ConditionManager} conditionManager
 * @property {EffectManager} effectManager
 * @property {EventManager} eventManager
 * @property {ItemManager} itemManager
 */
export default class Game {

  /**
   * 현재 게임의 상태를 나타냄
   * @readonly
   * @enum {Symbol}
   */
  static STATE = Object.freeze({
    FreeAction: Symbol(),
    Dialog: Symbol()
  });

  /**
   * 새 Game 생성
   */
  constructor() {
    this._load('player', Player);

    this._asyncLoad('characterManager', CharacterManager.load(this, '../../json/characters.json'));
    this._asyncLoad('conditionManager', ConditionManager.load(this, '../../json/conditions.json'));
    this._asyncLoad('effectManager', EffectManager.load(this, '../../json/effects.json'));
    this._asyncLoad('eventManager', EventManager.load(this, '../../json/events.json'));
    this._asyncLoad('itemManager', ItemManager.load(this, '../../json/items.json'));

    this.setState(Game.STATE.FreeAction);
  }

  /**
   * 현재 게임 인스턴스로 클래스를 로드함
   * @param {string} name 지정할 이름
   * @param {Function} className 로드할 클래스
   */
  _load(name, className) {
    this[name] = new className(this);
  }

  /**
   * 현재 게임에 비동기 대상을 로드함
   * @param {string} name 지정할 이름
   * @param {Promise} promise 로드할 대상
   */
  _asyncLoad(name, promise) {
    promise.then(result => { this[name] = result; });
  }

  /**
   * 게임의 상태를 설정함
   * @param {Game.STATE} newState 
   */
  setState(newState) {
    this._state = newState;
  }
};
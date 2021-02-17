import History from "./history.js";
import Player from "./player.js";

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

    this._asyncLoad('history', History.load(this, '../../json/history.json'));

    this.setState(Game.STATE.FreeAction);
  }

  /**
   * 현재 게임 인스턴스로 클래스를 로드함
   * @param {string} name - 지정할 이름
   * @param {Function} className - 로드할 클래스
   */
  _load(name, className) {
    this[name] = new className(this);
  }

  /**
   * 현재 게임에 비동기 대상을 로드함
   * @param {string} name - 지정할 이름
   * @param {Promise} promise - 로드할 대상
   */
  _asyncLoad(name, promise) {
    promise.then(result => { this[name] = result; });
  }

  /**
   * 현재 게임의 시각을 얻어옴
   * @returns {Date} - 현재 게임의 시각
   */
  now() {
    return this.history.now();
  }

  /**
   * 게임의 상태를 설정함
   * @param {Game.STATE} newState 
   */
  setState(newState) {
    this._state = newState;
  }
};
import History from "./history.js";
import Player from "./player.js";

export default class Game {
  constructor() {
    this._load('player', Player);
    
    this._asyncLoad('history', History.load(this, '../../json/history.json'));
  }

  _load(name, className) {
    this[name] = new className(this);
  }

  _asyncLoad(name, promise) {
    promise.then(result => { this[name] = result; });
  }

  now() {
    return this.history.now();
  }
};
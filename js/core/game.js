import History from "./history.js";
import Player from "./player.js";

export default class Game {
  constructor() {
    this.history = new History(this);
    this.player = new Player();
  }

  now() {
    return this.history.now();
  }
};
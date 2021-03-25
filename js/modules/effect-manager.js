import Effect from "../core/effect.js";
import CreateManager from "./manager.js";

/**
 * 효과 매니저 클래스
 * @class
 * @classdesc 게임 내에서 효과의 생성 및 정보 저장을 담당
 */
export default class EffectManager extends CreateManager(Effect) {

  _getTargetCharacter(name) {
    const character = this._gameInstance.characterManager.getObject(name);
    if(!character) {
      return this._gameInstance.characterManager._player;
    }

    return character;
  }

  /**
   * 효과를 발생시킴
   * @param {string} effect 발생할 조건의 이름
   */
  doEffect(effectName) {
    /**
     * @todo effect do 작성할것
     */
    const effect = this.getObject(effectName);

    switch(effect.type) {
      case 'Get-money':
        this._getTargetCharacter(effect.data.targetName).giveMoney(effect.data.amount);
        break;
    }
  }

  /**
   * 효과를 취소시킴
   * @param {string} effect 취소할 조건의 이름
   */
  undoEffect(effectName) {
    /**
     * @todo effect undo 작성할것
     */
    const effect = this.getObject(effectName);

    switch(effect.type) {
      case 'Get-money':
        this._getTargetCharacter(effect.data.targetName).giveMoney(-effect.data.amount);
        break;
    }
  }
}
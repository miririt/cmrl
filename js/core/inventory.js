
/**
 * 인벤토리 클래스
 * @class
 * @classdesc 캐릭터의 인벤토리를 담당
 */
export default class Inventory {
  /**
   * 새 Inventory 생성
   */
  constructor() {
    this._list = [];
  }

  add(item, count = 1) {
    const existingItem = this._list.find(existing => existing.name === item.name);
    if(existingItem) {
      existingItem.add(count);
    }
  }
};
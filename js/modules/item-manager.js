import Item from "../core/item.js";
import CreateManager from "./manager.js";

/**
 * 아이템 매니저 클래스
 * @class
 * @classdesc 게임 내에서 아이템의 생성 및 정보 저장을 담당
 */
export default class ItemManager extends CreateManager(Item.Template) {
  /**
   * 새 ItemManager 생성
   * @param {Game} gameInstance - 이 아이템 매니저가 연결되어 있는 게임
   * @param {Array<Item>} templates - 아이템 목록
   */
  constructor(gameInstance, templates) {
    super(gameInstance, templates);

    this._gameInstance = gameInstance;
    this._itemTemplates = templates;
  }

  /**
   * 이름 또는 인덱스로 아이템 템플릿을 얻어옴
   * @param {number|string} query - 아이템 이름 string 또는 아이템 인덱스 number
   * @returns {Item.Template} - 찾아낸 아이템 템플릿
   */
  getItemTemplate(query) {
    return this.getObject(query);
  }

  /**
   * 아이템 템플릿을 검색함
   * @param {Object} query - 검색할 조건
   * @param {Item.TYPE} query.type - 아이템 타입을 지정
   * @param {Object} query.name - 아이템 이름을 지정
   * @param {string} query.name.exact - 아이템 이름이 특정 문자열과 일치하도록 지정
   * @param {string} query.name.includes - 아이템 이름에 특정 문자열이 들어가도록 지정
   */
  searchItems(query = {
    type: Item.TYPE.All,
    name: {
      exact: null,
      includes: null
    }
  }) {
    return this._itemTemplates.filter(item => {
      if('undefined' !== query.type && Item.TYPE.All !== query.type) {
        if(item.type !== query.type) return false;
      }
      if('object' === query.name) {
        if('string' === query.name.exact) {
          if(item.name !== query.name.exact) return false;
        }
        if('string' === query.name.includes) {
          if(!item.name.includes(query.name.includes)) return false;
        }
      }
      return true;
    });
  }
}
/**
 * 매니저 원형 클래스를 생성함
 * @param {Object} Type 매니저가 담당할 타입을 지정
 */
export default function CreateManager(Type) {
  /**
   * 매니저 원형 클래스
   * @class
   * @classdesc 게임 내에서 특정 객체들의 생성 및 정보 저장을 담당
   * 
   * @property {Game} _gameInstance 이 매니저가 연결된 게임 인스턴스
   */
  return class Manager {
    /**
     * 새 Manager 생성
     * @param {Game} gameInstance 이 매니저가 연결되어 있는 게임
     * @param {Array} objects 담당하는 객체 목록
     */
    constructor(gameInstance, objects) {
      this._gameInstance = gameInstance;
      this._objects = objects;
    }
  
    /**
     * Manager 불러오기
     * @param {Game} gameInstance 게임 인스턴스
     * @param {string} fromFile 객체를 불러올 파일명
     * @returns {Promise<Function>} 불러온 Manager를 반환하는 Promise
     */
    static async load(gameInstance, fromFile) {
      const json = await fetch(fromFile).then(resp => resp.json());
      const objects = json.map(object => Type.fromJson(object));
  
      return new this(gameInstance, objects);
    }

    /**
     * 이름 또는 인덱스로 객체를 얻어옴
     * @param {number|string} query 아이템 이름 string 또는 아이템 인덱스 number
     * @returns {Type} 찾아낸 객체
     */
    getObject(query) {
      if('string' === typeof query) {
        return this._objects.find(object => object.name === query);
      } else if('number' === typeof query) {
        return this._object[query];
      }
    }
  };
};
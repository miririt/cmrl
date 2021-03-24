export default class IType {
  static _types = {};
  static _fallbackType = {
    name: 'Any',
    symbol: Symbol('Any')
  };

  /**
   * 문자열에서 타입 객체를 반환함
   * @param {string} typeString 타입 스트링
   * @return {Symbol} 타입 심볼
   */
  static fromString(typeString) {
    if(this._types[typeString]) {
      return this._types[typeString];
    } else {
      return this._fallbackType.symbol;
    }
  }

  /**
   * 타입 객체에서 문자열을 반환함
   * @param {Symbol} typeSymbol 타입 심볼
   * @return {string} 타입 스트링
   */
   static toString(typeSymbol) {
    const typeString =  Object.keys(this._types).find( typeString => {
      return this._types[typeString] === typeSymbol;
    });

    if(typeString) {
      return typeString;
    } else {
      return this._fallbackType.name;
    }
  }

  /**
   * 타입을 만듦
   * @param  {Array<string>} typeStrings 타입 스트링 목록
   */
  static createType(...typeStrings) {
    const typeClass = class extends IType { };
    delete typeClass.createType;

    const typesObject = typeStrings.reduce((accTypes, typeString) => {
      const regularTypeString = typeString.toLowerCase().replace(/^./, (firstLetter) => firstLetter.toUpperCase());
      accTypes[regularTypeString] = Symbol(regularTypeString);
      return accTypes;
    }, {});

    typeClass._types = Object.freeze(typesObject);

    return typeClass;
  }
}
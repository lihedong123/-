// 验证工具
export default class validateUtil {
  // 空（字符串,对象，数组）（validate）
  static isNull(data) {
    return (
      data === null ||
      data === '' ||
      data === undefined ||
      JSON.stringify(data) == '{}' ||
      this.isEmptyArray(data)
    )
  }

  // 非空（validate）
  static isNotNull(data) {
    return !this.isNull(data)
  }

  // 第一个字符小写（validate）
  static firstCharLow(data) {
    if (this.isNotNull(data)) {
      return data.slice(0, 1).toLowerCase() + data.slice(1, data.length)
    }
  }

  // 第一个字符小写（validate）
  static firstCharUpr(data) {
    if (this.isNotNull(data)) {
      return data.slice(0, 1).toUpperCase() + data.slice(1, data.length)
    }
  }

  // 转换为驼峰（validate）
  static toCamel(name) {
    return name.replace(/\_(\w)/g, function (all, letter) {
      return letter.toUpperCase()
    })
  }

  // 转换为下划线（validate）
  static toStrip(name) {
    return name.replace(/([A-Z])/g, '_$1').toLowerCase()
  }

  // 方法
  static isFunction(obj) {
    return obj && typeof obj === 'function'
  }

  // 字符串
  static isString(obj) {
    return obj && typeof obj === 'string'
  }

  // 空对象
  static isNullObj(obj) {
    return JSON.stringify(obj) == '{}'
  }

  // 数组（validate）
  static isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]'
  }

  // 对象
  static isObject(obj) {
    return obj && typeof obj === 'object'
  }

  static isResult(result) {
    return this.isNotNull(result) && this.isObject(result)
  }

  static isNullResult(result) {
    return (
      this.isNotNull(result) &&
      this.isObject(result) &&
      JSON.stringify(result) === '{}'
    )
  }

  static isNotNullResult(result) {
    return (
      this.isNotNull(result) &&
      this.isObject(result) &&
      !(JSON.stringify(result) === '{}')
    )
  }

  // 空数组
  static isEmptyArray(obj) {
    return this.isArray(obj) && obj.length == 0
  }

  // 是否相等
  static isEqual(attrName, attrArry) {
    var attr = attrArry.split('|')
    for (var i = 0; i < attr.length; i++) {
      if (attrName.toLowerCase() == att
}

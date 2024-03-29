"use strict";

var _obj;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var variable = "hello";
var obj = (_obj = {
  variable: variable
}, _defineProperty(_obj, "variable", variable), _defineProperty(_obj, "variable", variable), _obj);

var obj2 = _objectSpread({}, obj);

var pessoa = /*#__PURE__*/function () {
  function pessoa(name, lastName, address) {
    _classCallCheck(this, pessoa);

    this.name = name;
    this.lastName = lastName;
    this.address = address;
  }

  _createClass(pessoa, [{
    key: "address",
    get: function get() {
      return "".concat(this.name, " ").concat(this.address);
    },
    set: function set(value) {
      this.address = value;
    }
  }]);

  return pessoa;
}();

var splitStr = function splitStr(str) {
  return str.split();
};

var props = {
  propA: "A",
  propB: "B",
  propC: "C"
};
var _obj2 = obj3,
    propA = _obj2.propA,
    propB = _obj2.propB,
    propC = _obj2.propC;

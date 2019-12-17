"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SampleComponent = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SampleComponent = function SampleComponent(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return _react["default"].createElement("div", null, _react["default"].createElement("h1", null, title), _react["default"].createElement("p", null, children));
};

exports.SampleComponent = SampleComponent;
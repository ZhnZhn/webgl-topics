"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _useRefValue = _interopRequireDefault(require("../hooks/useRefValue"));

var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose"));

var _RowProp = _interopRequireDefault(require("./RowProp"));

var _Panel = require("./Panel.Style");

var _jsxRuntime = require("react/jsx-runtime");

var PanelTranslate = function PanelTranslate(_ref) {
  var zMatrixTranslate = _ref.zMatrixTranslate,
      onGetComp = _ref.onGetComp;

  var _fnAfterSet = (0, _useRefValue["default"])(function (comp) {
    comp.configMatrix(comp);
  });

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_OpenClose["default"], {
    caption: "Translate",
    style: _Panel.OPEN_CLOSE,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowProp["default"], {
      labelBy: "Z:",
      inputId: "tZ",
      value: zMatrixTranslate,
      propKey: "zMatrixTranslate",
      onGetComp: onGetComp,
      fnAfterSet: _fnAfterSet
    })
  });
};
/*
PanelTranslate.propTypes = {
  zMatrixTranslate: PropTypes.number.isRequired,
  onGetComp: PropTypes.func.isRequired
}
*/


var _default = PanelTranslate;
exports["default"] = _default;
//# sourceMappingURL=PanelTranslate.js.map
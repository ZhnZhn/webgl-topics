"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useRefValue = _interopRequireDefault(require("../hooks/useRefValue"));
var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose"));
var _RowProp = _interopRequireDefault(require("./RowProp"));
var _Panel = require("./Panel.Style");
var _jsxRuntime = require("preact/jsx-runtime");
const PanelTranslate = _ref => {
  let {
    zMatrixTranslate,
    onGetComp
  } = _ref;
  const _fnAfterSet = (0, _useRefValue.default)(comp => {
    comp.configMatrix(comp);
  });
  return (0, _jsxRuntime.jsx)(_OpenClose.default, {
    caption: "Translate",
    style: _Panel.OPEN_CLOSE,
    childrenStyle: _Panel.OC_CHILDREN,
    children: (0, _jsxRuntime.jsx)(_RowProp.default, {
      labelBy: "Z",
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
var _default = exports.default = PanelTranslate;
//# sourceMappingURL=PanelTranslate.js.map
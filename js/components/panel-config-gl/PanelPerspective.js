"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useRefValue = _interopRequireDefault(require("../hooks/useRefValue"));
var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose"));
var _RowProp = _interopRequireDefault(require("./RowProp"));
var _Panel = require("./Panel.Style");
var _jsxRuntime = require("preact/jsx-runtime");
const PanelPerspective = _ref => {
  let {
    perspectiveNear,
    perspectiveFar,
    onGetComp
  } = _ref;
  const _fnAfterSet = (0, _useRefValue.default)(comp => {
    comp.createPerspective(comp);
  });
  return (0, _jsxRuntime.jsxs)(_OpenClose.default, {
    caption: "Perspective",
    style: _Panel.OPEN_CLOSE,
    childrenStyle: _Panel.OC_CHILDREN,
    children: [(0, _jsxRuntime.jsx)(_RowProp.default, {
      labelBy: "Near",
      inputId: "pNear",
      value: perspectiveNear,
      propKey: "perspectiveNear",
      styleLabel: _Panel.LABEL_PERSPECTIVE,
      onGetComp: onGetComp,
      fnAfterSet: _fnAfterSet
    }), (0, _jsxRuntime.jsx)(_RowProp.default, {
      labelBy: "Far",
      inputId: "pFar",
      value: perspectiveFar,
      styleLabel: _Panel.LABEL_PERSPECTIVE,
      propKey: "perspectiveFar",
      onGetComp: onGetComp,
      fnAfterSet: _fnAfterSet
    })]
  });
};

/*
PanelPerspective.propTypes = {
  perspectiveNear: PropTypes.number.isRequired,
  perspectiveFar: PropTypes.number.isRequired,
  onGetComp: PropTypes.func.isRequired
}
*/
var _default = exports.default = PanelPerspective;
//# sourceMappingURL=PanelPerspective.js.map
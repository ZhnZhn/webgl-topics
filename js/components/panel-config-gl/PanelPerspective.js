"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _useRefValue = _interopRequireDefault(require("../hooks/useRefValue"));

var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose"));

var _RowProp = _interopRequireDefault(require("./RowProp"));

var _Panel = require("./Panel.Style");

var _jsxRuntime = require("react/jsx-runtime");

var PanelPerspective = function PanelPerspective(_ref) {
  var perspectiveNear = _ref.perspectiveNear,
      perspectiveFar = _ref.perspectiveFar,
      onGetComp = _ref.onGetComp;

  var _fnAfterSet = (0, _useRefValue["default"])(function (comp) {
    comp.createPerspective(comp);
  });

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_OpenClose["default"], {
    caption: "Perspective",
    style: _Panel.OPEN_CLOSE,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_RowProp["default"], {
      labelBy: "Near:",
      inputId: "pNear",
      value: perspectiveNear,
      propKey: "perspectiveNear",
      styleLabel: _Panel.LABEL_PERSPECTIVE,
      onGetComp: onGetComp,
      fnAfterSet: _fnAfterSet
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowProp["default"], {
      labelBy: "Far:",
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


var _default = PanelPerspective;
exports["default"] = _default;
//# sourceMappingURL=PanelPerspective.js.map
"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

/*eslint-disable react-hooks/exhaustive-deps */
var useStepHandlers = function useStepHandlers(refOptionsComp, getActiveElement, decorateActiveElement, undecorateActiveElement, setActiveIndexOption, getActiveIndexOption) {
  return (0, _uiApi.useMemo)(function () {
    return [//stepDownOption
    function (optionsLength) {
      var prevComp = getActiveElement();

      if (prevComp) {
        undecorateActiveElement(prevComp);

        var _optionsComp = (0, _uiApi.getRefValue)(refOptionsComp);

        setActiveIndexOption(getActiveIndexOption() + 1);

        if (getActiveIndexOption() >= optionsLength) {
          setActiveIndexOption(0);
          _optionsComp.scrollTop = 0;
        }

        var nextComp = getActiveElement();
        decorateActiveElement(nextComp);
        var offsetTop = nextComp.offsetTop;
        var scrollTop = _optionsComp.scrollTop;

        if (offsetTop - scrollTop > 70) {
          _optionsComp.scrollTop += offsetTop - scrollTop - 70;
        }
      }
    }, //stepUpOption
    function (optionsLength) {
      var prevComp = getActiveElement();

      if (prevComp) {
        undecorateActiveElement(prevComp);

        var _optionsComp = (0, _uiApi.getRefValue)(refOptionsComp);

        setActiveIndexOption(getActiveIndexOption() - 1);

        if (getActiveIndexOption() < 0) {
          setActiveIndexOption(optionsLength - 1);
          var bottomComp = getActiveElement();
          _optionsComp.scrollTop = bottomComp.offsetTop;
        }

        var nextComp = getActiveElement();
        decorateActiveElement(nextComp);
        var offsetTop = nextComp.offsetTop;
        var scrollTop = _optionsComp.scrollTop;

        if (offsetTop - scrollTop < 70) {
          _optionsComp.scrollTop -= 70 - (offsetTop - scrollTop);
        }
      }
    }];
  }, []);
}; // _refOptionsComp,
// _getActiveItemComp, _decorateActiveRowComp, _undecorateActiveRowComp,
// getActiveIndexOption, setActiveIndexOption

/*eslint-enable react-hooks/exhaustive-deps */


var _default = useStepHandlers;
exports["default"] = _default;
//# sourceMappingURL=useStepHandlers.js.map
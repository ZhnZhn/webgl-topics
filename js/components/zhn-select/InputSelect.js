"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _useProperty2 = _interopRequireDefault(require("../hooks/useProperty"));

var _useToggle2 = _interopRequireDefault(require("../hooks/useToggle"));

var _ItemOptionDf = _interopRequireDefault(require("./ItemOptionDf"));

var _DivOptions = _interopRequireDefault(require("./DivOptions"));

var _OptionStack = _interopRequireDefault(require("./OptionStack"));

var _CL = require("./CL");

var _crStyleWidth = _interopRequireDefault(require("./crStyleWidth"));

var _crAfterInputEl2 = _interopRequireDefault(require("./crAfterInputEl"));

var _crFilteredOptions = _interopRequireDefault(require("./crFilteredOptions"));

var _useOptionDecorator2 = _interopRequireDefault(require("./useOptionDecorator"));

var _useStepHandlers2 = _interopRequireDefault(require("./useStepHandlers"));

var _helperFns = require("./helperFns");

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
var _toItem = function _toItem(item, propCaption) {
  var _ref;

  return _ref = {}, _ref[propCaption] = 'From Input', _ref.value = item.inputValue, _ref;
};

var _crFooterIndex = function _crFooterIndex(_ref2) {
  var options = _ref2.options,
      initialOptions = _ref2.initialOptions;
  return [options[0] && options[0].value !== 'noresult' ? options.length : 0, initialOptions ? initialOptions.length : 0];
};

var DF_OPTIONS = [];

var _crInitialStateFromProps = function _crInitialStateFromProps(_ref3) {
  var optionName = _ref3.optionName,
      optionNames = _ref3.optionNames,
      _ref3$options = _ref3.options,
      options = _ref3$options === void 0 ? DF_OPTIONS : _ref3$options;
  return {
    value: '',
    initialOptions: options,
    options: options,
    optionNames: optionNames || optionName || ''
  };
};

var FN_NOOP = function FN_NOOP() {};

var _makeVisibleActiveRowComp = function _makeVisibleActiveRowComp(comp) {
  if (comp) {
    var offsetTop = comp.offsetTop,
        optionsElement = comp.parentElement,
        scrollTop = optionsElement.scrollTop;

    if (offsetTop - scrollTop > 70) {
      optionsElement.scrollTop += offsetTop - scrollTop - 70;
    }

    if (offsetTop - scrollTop < 0) {
      optionsElement.scrollTop = 0;
    }
  }
};

var InputSelect = function InputSelect(props) {
  var rootStyle = props.rootStyle,
      width = props.width,
      rootOptionsStyle = props.rootOptionsStyle,
      _props$propCaption = props.propCaption,
      propCaption = _props$propCaption === void 0 ? 'caption' : _props$propCaption,
      _props$ItemOptionComp = props.ItemOptionComp,
      ItemOptionComp = _props$ItemOptionComp === void 0 ? _ItemOptionDf["default"] : _props$ItemOptionComp,
      _props$isWithInput = props.isWithInput,
      isWithInput = _props$isWithInput === void 0 ? false : _props$isWithInput,
      _props$onSelect = props.onSelect,
      onSelect = _props$onSelect === void 0 ? FN_NOOP : _props$onSelect,
      _refArrowCell = (0, _uiApi.useRef)(),
      _refDomInputText = (0, _uiApi.useRef)(),
      _refOptionsElement = (0, _uiApi.useRef)(),
      _refIndexNode = (0, _uiApi.useRef)(),
      _useProperty = (0, _useProperty2["default"])(0),
      setActiveIndexOption = _useProperty[0],
      getActiveIndexOption = _useProperty[1],
      _useState = (0, _uiApi.useState)(function () {
    return _crInitialStateFromProps(props);
  }),
      state = _useState[0],
      setState = _useState[1],
      value = state.value,
      options = state.options,
      initialOptions = state.initialOptions,
      _useToggle = (0, _useToggle2["default"])(false),
      isShowOption = _useToggle[0],
      toggleIsShowOption = _useToggle[1],
      _setStateToInit = (0, _uiApi.useCallback)(function () {
    setState(function () {
      return _crInitialStateFromProps(props);
    });
    toggleIsShowOption(false);
    setActiveIndexOption(0);
  }, [props]),
      _getActiveElement = (0, _uiApi.useCallback)(function () {
    return (((0, _uiApi.getRefValue)(_refOptionsElement) || {}).childNodes || [])[getActiveIndexOption()];
  }, []),
      _useOptionDecorator = (0, _useOptionDecorator2["default"])(_refIndexNode, _getActiveElement),
      _decorateActiveElement = _useOptionDecorator[0],
      _undecorateActiveElement = _useOptionDecorator[1],
      _hInputChange = function _hInputChange(event) {
    var token = event.target.value,
        tokenLn = token.length,
        valueLn = value.length;

    if (tokenLn !== valueLn) {
      var _activeIndexOption = getActiveIndexOption();

      if (_activeIndexOption !== 0) {
        _undecorateActiveElement();

        setActiveIndexOption(0);
      }

      setState(function (prevState) {
        return (0, _extends2["default"])({}, prevState, {
          value: token,
          options: (0, _crFilteredOptions["default"])(token, tokenLn > valueLn ? options : initialOptions, propCaption, isWithInput)
        });
      });
      toggleIsShowOption(true);
    }
  },
      _useStepHandlers = (0, _useStepHandlers2["default"])(_refOptionsElement, _getActiveElement, _decorateActiveElement, _undecorateActiveElement, setActiveIndexOption, getActiveIndexOption),
      _stepDownOption = _useStepHandlers[0],
      _stepUpOption = _useStepHandlers[1],
      _hInputKeyDown = function _hInputKeyDown(event) {
    switch (event.keyCode) {
      // enter
      case 13:
        {
          var _indexActiveOption = getActiveIndexOption();

          if ((0, _helperFns.isNumber)(_indexActiveOption)) {
            var item = options[_indexActiveOption];

            if (item && item[propCaption]) {
              var _item = item.value !== 'noresult' ? item : isWithInput ? _toItem(item, propCaption) : void 0;

              onSelect(_item);
              toggleIsShowOption(false);
              setState(function (prevState) {
                return (0, _extends2["default"])({}, prevState, {
                  value: item[propCaption]
                });
              });
            }
          } else {
            onSelect();
          }

          break;
        }
      //escape, delete

      //escape, delete
      case 27:
      case 46:
        {
          event.preventDefault();

          if (isShowOption) {
            toggleIsShowOption(false);
          } else {
            _undecorateActiveElement();

            _setStateToInit();

            onSelect();
          }

          break;
        }
      //down

      //down
      case 40:
        {
          if (!isShowOption) {
            toggleIsShowOption(true);
          } else {
            event.preventDefault();

            _stepDownOption();
          }

          break;
        }
      //up

      //up
      case 38:
        {
          if (isShowOption) {
            event.preventDefault();

            _stepUpOption();
          }

          break;
        }

      default:
        return;
    }
  },
      _hClickItem = (0, _uiApi.useCallback)(function (item, event) {
    _undecorateActiveElement();

    setActiveIndexOption((0, _helperFns.getDataIndex)(event.currentTarget));
    toggleIsShowOption(false);
    setState(function (prevState) {
      return (0, _extends2["default"])({}, prevState, {
        value: item[propCaption]
      });
    });
    onSelect(item);
  }, []),
      domOptions = (0, _uiApi.useMemo)(function () {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionStack["default"], {
      options: options,
      indexActiveOption: getActiveIndexOption(),
      propCaption: propCaption,
      ItemOptionComp: ItemOptionComp,
      onClick: _hClickItem
    });
  }, [options]),
      clearInput = function clearInput() {
    _undecorateActiveElement();

    onSelect();

    _setStateToInit();
  };
  /*eslint-disable react-hooks/exhaustive-deps */


  (0, _uiApi.useEffect)(function () {
    if (isShowOption) {
      var comp = _getActiveElement();

      _decorateActiveElement(comp);

      _makeVisibleActiveRowComp(comp);
    }
  }, [isShowOption]); // _decorateActiveElement, _getActiveElement

  /*eslint-enable react-hooks/exhaustive-deps */

  var indexActiveOption = getActiveIndexOption(),
      _rootWidthStyle = (0, _crStyleWidth["default"])(width, rootStyle),
      _crAfterInputEl = (0, _crAfterInputEl2["default"])(props, state, _refArrowCell, toggleIsShowOption),
      placeholder = _crAfterInputEl[0],
      afterInputEl = _crAfterInputEl[1],
      _crFooterIndex2 = _crFooterIndex(state),
      nFiltered = _crFooterIndex2[0],
      nAll = _crFooterIndex2[1];

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: _CL.CL_ROOT,
    style: _rootWidthStyle,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      ref: _refDomInputText,
      className: _CL.CL_INPUT,
      type: "text",
      name: "select" //autoComplete="off"
      ,
      autoCorrect: "off",
      autoCapitalize: "off",
      spellCheck: false,
      value: value,
      placeholder: placeholder,
      onChange: _hInputChange,
      onKeyDown: _hInputKeyDown
    }), afterInputEl, /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {
      className: _CL.CL_INPUT_HR
    }), isShowOption && /*#__PURE__*/(0, _jsxRuntime.jsx)(_DivOptions["default"], {
      refOptionsComp: _refOptionsElement,
      refIndexNode: _refIndexNode,
      rootOptionsStyle: rootOptionsStyle,
      width: width,
      isShowOption: isShowOption,
      domOptions: domOptions,
      indexActiveOption: indexActiveOption,
      nFiltered: nFiltered,
      nAll: nAll,
      onStepUp: _stepUpOption,
      onStepDown: _stepDownOption,
      onClear: clearInput
    })]
  });
};
/*
InputSelect.propTypes = {
   propCaption: PropTypes.string,
   ItemOptionComp: PropTypes.element,
   width: PropTypes.string,
   options: PropTypes.arrayOf(PropTypes.shape({
      caption: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])
   })),
   optionName: PropTypes.string,
   optionNames: PropTypes.string,
   placeholder: PropTypes.string,
   isWithInput: PropTypes.bool,
   prefixInput: PropTypes.string

   onSelect: PropTypes.func,
}
*/


var _default = InputSelect;
exports["default"] = _default;
//# sourceMappingURL=InputSelect.js.map
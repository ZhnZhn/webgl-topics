"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useProperty = _interopRequireDefault(require("../hooks/useProperty"));
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _ItemOptionDf = _interopRequireDefault(require("./ItemOptionDf"));
var _DivOptions = _interopRequireDefault(require("./DivOptions"));
var _OptionStack = _interopRequireDefault(require("./OptionStack"));
var _CL = require("./CL");
var _crStyleWidth = _interopRequireDefault(require("./crStyleWidth"));
var _crAfterInputEl = _interopRequireDefault(require("./crAfterInputEl"));
var _crFilteredOptions = _interopRequireDefault(require("./crFilteredOptions"));
var _useOptionDecorator = _interopRequireDefault(require("./useOptionDecorator"));
var _useStepHandlers = _interopRequireDefault(require("./useStepHandlers"));
var _helperFns = require("./helperFns");
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from 'prop-types'

const _toItem = (item, propCaption) => ({
  [propCaption]: 'From Input',
  value: item.inputValue
});
const _crFooterIndex = _ref => {
  let {
    options,
    initialOptions
  } = _ref;
  return [options[0] && options[0].value !== 'noresult' ? options.length : 0, initialOptions ? initialOptions.length : 0];
};
const DF_OPTIONS = [];
const _crInitialStateFromProps = _ref2 => {
  let {
    optionName,
    optionNames,
    options = DF_OPTIONS
  } = _ref2;
  return {
    value: '',
    initialOptions: options,
    options: options,
    optionNames: optionNames || optionName || ''
  };
};
const FN_NOOP = () => {};
const _makeVisibleActiveRowComp = comp => {
  if (comp) {
    const {
        offsetTop
      } = comp,
      optionsElement = comp.parentElement,
      {
        scrollTop
      } = optionsElement;
    if (offsetTop - scrollTop > 70) {
      optionsElement.scrollTop += offsetTop - scrollTop - 70;
    }
    if (offsetTop - scrollTop < 0) {
      optionsElement.scrollTop = 0;
    }
  }
};
const InputSelect = props => {
  const {
      rootStyle,
      width,
      rootOptionsStyle,
      propCaption = 'caption',
      ItemOptionComp = _ItemOptionDf.default,
      isWithInput = false,
      onSelect = FN_NOOP
    } = props,
    _refDomInputText = (0, _uiApi.useRef)(),
    _refOptionsElement = (0, _uiApi.useRef)(),
    _refIndexNode = (0, _uiApi.useRef)(),
    [setActiveIndexOption, getActiveIndexOption] = (0, _useProperty.default)(0),
    [state, setState] = (0, _uiApi.useState)(() => _crInitialStateFromProps(props)),
    {
      value,
      options,
      initialOptions
    } = state,
    [isShowOption, toggleIsShowOption] = (0, _useToggle.default)(false)

    /*eslint-disable react-hooks/exhaustive-deps */,
    _setStateToInit = (0, _uiApi.useCallback)(() => {
      setState(() => _crInitialStateFromProps(props));
      toggleIsShowOption(false);
      setActiveIndexOption(0);
    }, [props])
    // toggleIsShowOption, setActiveIndexOption
    /*eslint-enable react-hooks/exhaustive-deps */

    /*eslint-disable react-hooks/exhaustive-deps */,
    _getActiveElement = (0, _uiApi.useCallback)(() => {
      return (((0, _uiApi.getRefValue)(_refOptionsElement) || {}).childNodes || [])[getActiveIndexOption()];
    }, [])
    // getActiveIndexOption
    /*eslint-enable react-hooks/exhaustive-deps */,
    [_decorateActiveElement, _undecorateActiveElement] = (0, _useOptionDecorator.default)(_refIndexNode, _getActiveElement),
    _hInputChange = event => {
      const token = event.target.value,
        tokenLn = token.length,
        valueLn = value.length;
      if (tokenLn !== valueLn) {
        const _activeIndexOption = getActiveIndexOption();
        if (_activeIndexOption !== 0) {
          _undecorateActiveElement();
          setActiveIndexOption(0);
        }
        setState(prevState => ({
          ...prevState,
          value: token,
          options: (0, _crFilteredOptions.default)(token, tokenLn > valueLn ? options : initialOptions, propCaption, isWithInput)
        }));
        toggleIsShowOption(true);
      }
    },
    [_stepDownOption, _stepUpOption] = (0, _useStepHandlers.default)(_refOptionsElement, _getActiveElement, _decorateActiveElement, _undecorateActiveElement, setActiveIndexOption, getActiveIndexOption),
    _hInputKeyDown = event => {
      switch (event.keyCode) {
        // enter
        case 13:
          {
            const _indexActiveOption = getActiveIndexOption();
            if ((0, _helperFns.isNumber)(_indexActiveOption)) {
              const item = options[_indexActiveOption];
              if (item && item[propCaption]) {
                const _item = item.value !== 'noresult' ? item : isWithInput ? _toItem(item, propCaption) : void 0;
                onSelect(_item);
                toggleIsShowOption(false);
                setState(prevState => ({
                  ...prevState,
                  value: item[propCaption]
                }));
              }
            } else {
              onSelect();
            }
            break;
          }
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
    }

    /*eslint-disable react-hooks/exhaustive-deps */,
    _hClickItem = (0, _uiApi.useCallback)((item, event) => {
      _undecorateActiveElement();
      setActiveIndexOption((0, _helperFns.getDataIndex)(event.currentTarget));
      toggleIsShowOption(false);
      setState(prevState => ({
        ...prevState,
        value: item[propCaption]
      }));
      onSelect(item);
    }, [])
    // _undecorateActiveElement, setActiveIndexOption
    // toggleIsShowOption
    /*eslint-enable react-hooks/exhaustive-deps */

    /*eslint-disable react-hooks/exhaustive-deps */,
    domOptions = (0, _uiApi.useMemo)(() => (0, _jsxRuntime.jsx)(_OptionStack.default, {
      options: options,
      indexActiveOption: getActiveIndexOption(),
      propCaption: propCaption,
      ItemOptionComp: ItemOptionComp,
      onClick: _hClickItem
    }), [options])
    // getActiveIndexOption, _hClickItem
    // propCaption, ItemOptionComp
    /*eslint-enable react-hooks/exhaustive-deps */,
    clearInput = () => {
      _undecorateActiveElement();
      onSelect();
      _setStateToInit();
    };

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(() => {
    if (isShowOption) {
      const comp = _getActiveElement();
      _decorateActiveElement(comp);
      _makeVisibleActiveRowComp(comp);
    }
  }, [isShowOption]);
  // _decorateActiveElement, _getActiveElement
  /*eslint-enable react-hooks/exhaustive-deps */

  const indexActiveOption = getActiveIndexOption(),
    _rootWidthStyle = (0, _crStyleWidth.default)(width, rootStyle),
    [placeholder, afterInputEl] = (0, _crAfterInputEl.default)(props, state, isShowOption, toggleIsShowOption),
    [nFiltered, nAll] = _crFooterIndex(state);
  return (0, _jsxRuntime.jsxs)("div", {
    className: _CL.CL_ROOT,
    style: _rootWidthStyle,
    children: [(0, _jsxRuntime.jsx)("input", {
      ref: _refDomInputText,
      className: _CL.CL_INPUT,
      type: "text",
      name: "select"
      //autoComplete="off"
      ,
      autoCorrect: "off",
      autoCapitalize: "off",
      spellCheck: false,
      value: value,
      placeholder: placeholder,
      onChange: _hInputChange,
      onKeyDown: _hInputKeyDown
    }), afterInputEl, (0, _jsxRuntime.jsx)("hr", {
      className: _CL.CL_INPUT_HR
    }), isShowOption && (0, _jsxRuntime.jsx)(_DivOptions.default, {
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
var _default = exports.default = InputSelect;
//# sourceMappingURL=InputSelect.js.map
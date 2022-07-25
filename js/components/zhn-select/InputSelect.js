"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _uiApi = require("../uiApi");

var _ItemOptionDf = _interopRequireDefault(require("./ItemOptionDf"));

var _DivOptions = _interopRequireDefault(require("./DivOptions"));

var _CL = require("./CL");

var _crStyleWidth = _interopRequireDefault(require("./crStyleWidth"));

var _crAfterInputEl2 = _interopRequireDefault(require("./crAfterInputEl"));

var _crFilteredOptions = _interopRequireDefault(require("./crFilteredOptions"));

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

var _crInitialStateFromProps = function _crInitialStateFromProps(_ref3) {
  var optionName = _ref3.optionName,
      optionNames = _ref3.optionNames,
      options = _ref3.options;
  return {
    value: '',
    isShowOption: false,
    initialOptions: options,
    options: options,
    optionNames: optionNames || optionName || '',
    isValidDomOptionsCache: false,
    isLocalMode: false
  };
};

var FN_NOOP = function FN_NOOP() {};

var _getDataIndex = function _getDataIndex(comp) {
  var dataset = comp.dataset,
      _ref4 = dataset || {},
      index = _ref4.index;

  return index;
};

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

var InputSelect = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(InputSelect, _Component);

  /*
  static propTypes = {
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
       isLoading: PropTypes.bool,
     isLoadingFailed: PropTypes.bool,
       onSelect: PropTypes.func,
     onLoadOption: PropTypes.func
  }
  */
  function InputSelect(_props) {
    var _this;

    _this = _Component.call(this, _props) || this;

    _this._initFromProps = function (_ref5) {
      var propCaption = _ref5.propCaption;
      _this.domOptionsCache = null;
      _this.indexActiveOption = 0;
      _this.propCaption = propCaption;
    };

    _this._setStateToInit = function (props) {
      _this._initFromProps(props);

      _this.setState(_crInitialStateFromProps(props));
    };

    _this._getActiveItemComp = function () {
      return _this["v" + _this.indexActiveOption];
    };

    _this._decorateActiveRowComp = function (comp) {
      if (comp) {
        _this._activeItem = comp;
        comp.classList.add(_CL.CL_OPTIONS_ROW_ACTIVE);

        var dataIndex = _getDataIndex(comp);

        if (_this.indexNode && dataIndex) {
          _this.indexNode.textContent = Number(dataIndex) + 1;
        }
      }
    };

    _this._undecorateActiveRowComp = function (comp) {
      var _comp = comp || _this._getActiveItemComp();

      if (_comp) {
        _comp.classList.remove(_CL.CL_OPTIONS_ROW_ACTIVE);
      }
    };

    _this._hInputChange = function (event) {
      var token = event.target.value,
          isWithInput = _this.props.isWithInput,
          _this$state = _this.state,
          value = _this$state.value,
          options = _this$state.options,
          initialOptions = _this$state.initialOptions,
          tokenLn = token.length,
          valueLn = value.length;

      if (tokenLn !== valueLn) {
        _this._undecorateActiveRowComp();

        _this.indexActiveOption = 0;

        _this.setState({
          value: token,
          isShowOption: true,
          isValidDomOptionsCache: false,
          options: (0, _crFilteredOptions["default"])(token, tokenLn > valueLn ? options : initialOptions, _this.propCaption, isWithInput)
        });
      }
    };

    _this._showOptions = function () {
      _this.setState({
        isShowOption: true
      });
    };

    _this._stepDownOption = function () {
      var prevComp = _this._getActiveItemComp();

      if (prevComp) {
        _this._undecorateActiveRowComp(prevComp);

        _this.indexActiveOption += 1;

        if (_this.indexActiveOption >= _this.state.options.length) {
          _this.indexActiveOption = 0;
          _this.optionsComp.scrollTop = 0;
        }

        var nextComp = _this._getActiveItemComp();

        _this._decorateActiveRowComp(nextComp);

        var offsetTop = nextComp.offsetTop;
        var scrollTop = _this.optionsComp.scrollTop;

        if (offsetTop - scrollTop > 70) {
          _this.optionsComp.scrollTop += offsetTop - scrollTop - 70;
        }
      }
    };

    _this._stepUpOption = function () {
      var prevComp = _this._getActiveItemComp();

      if (prevComp) {
        _this._undecorateActiveRowComp(prevComp);

        _this.indexActiveOption -= 1;

        if (_this.indexActiveOption < 0) {
          _this.indexActiveOption = _this.state.options.length - 1;

          var bottomComp = _this._getActiveItemComp();

          _this.optionsComp.scrollTop = bottomComp.offsetTop;
        }

        var nextComp = _this._getActiveItemComp();

        _this._decorateActiveRowComp(nextComp);

        var offsetTop = nextComp.offsetTop;
        var scrollTop = _this.optionsComp.scrollTop;

        if (offsetTop - scrollTop < 70) {
          _this.optionsComp.scrollTop -= 70 - (offsetTop - scrollTop);
        }
      }
    };

    _this._hInputKeyDown = function (event) {
      switch (event.keyCode) {
        // enter
        case 13:
          {
            var item = _this.state.options[_this.indexActiveOption];

            if (item && item[_this.propCaption]) {
              _this.setState({
                value: item[_this.propCaption],
                isShowOption: false,
                isValidDomOptionsCache: true
              });

              if (item.value !== 'noresult') {
                _this.props.onSelect(item);
              } else {
                var _item = _this.props.isWithInput ? _toItem(item, _this.propCaption) : void 0;

                _this.props.onSelect(_item);
              }
            }

            break;
          }
        //escape, delete

        case 27:
        case 46:
          {
            event.preventDefault();

            if (_this.state.isShowOption) {
              _this.setState({
                isShowOption: false
              });
            } else {
              _this._undecorateActiveRowComp();

              _this._setStateToInit(_this.props);

              _this.props.onSelect(void 0);
            }

            break;
          }

        case 40:
          //down
          if (!_this.state.isShowOption) {
            _this._showOptions();
          } else {
            event.preventDefault();

            _this._stepDownOption();
          }

          break;

        case 38:
          //up
          if (_this.state.isShowOption) {
            event.preventDefault();

            _this._stepUpOption();
          }

          break;

        default:
          return;
      }
    };

    _this._hToggleOptions = function () {
      if (_this.state.isShowOption) {
        _this.setState({
          isShowOption: false
        });
      } else {
        _this._showOptions();
      }
    };

    _this._hClickItem = function (item, index) {
      _this._undecorateActiveRowComp();

      _this.indexActiveOption = index;

      _this.setState({
        value: item[_this.propCaption],
        isShowOption: false
      });

      _this.props.onSelect(item);
    };

    _this._refOptionsComp = function (c) {
      return _this.optionsComp = c;
    };

    _this._refIndexNode = function (n) {
      return _this.indexNode = n;
    };

    _this._createDomOptionsWithCache = function () {
      var ItemOptionComp = _this.props.ItemOptionComp,
          _this$state2 = _this.state,
          options = _this$state2.options,
          isValidDomOptionsCache = _this$state2.isValidDomOptionsCache,
          _propCaption = _this.propCaption;

      var _domOptions;

      if (options) {
        if (!isValidDomOptionsCache) {
          /*eslint-disable jsx-a11y/click-events-have-key-events*/
          _domOptions = options.map(function (item, index) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              role: "option",
              "aria-selected": _this.indexActiveOption === index,
              tabIndex: "0",
              className: _CL.CL_OPTIONS_ROW,
              ref: function ref(c) {
                return _this["v" + index] = c;
              },
              "data-index": index,
              onClick: _this._hClickItem.bind(null, item, index),
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ItemOptionComp, {
                item: item,
                propCaption: _propCaption
              })
            }, index);
          });
          /*eslint-enable jsx-a11y/click-events-have-key-events*/

          _this.domOptionsCache = _domOptions;
        } else {
          _domOptions = _this.domOptionsCache;
        }
      }

      return _domOptions;
    };

    _this._refArrowCell = function (c) {
      return _this.arrowCell = c;
    };

    _this._refDomInputText = function (c) {
      return _this.domInputText = c;
    };

    _this.clearInput = function () {
      var onSelect = _this.props.onSelect;

      _this._undecorateActiveRowComp();

      onSelect(void 0);

      _this._setStateToInit(_this.props);
    };

    _this._initFromProps(_props);

    _this.state = _crInitialStateFromProps(_props);
    return _this;
  }

  var _proto = InputSelect.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    //Decorate Active Option
    if (this.state.isShowOption) {
      var comp = this._getActiveItemComp();

      this._decorateActiveRowComp(comp); //this.optionsComp


      _makeVisibleActiveRowComp(comp);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        rootStyle = _this$props.rootStyle,
        width = _this$props.width,
        rootOptionsStyle = _this$props.rootOptionsStyle,
        _this$state3 = this.state,
        value = _this$state3.value,
        isLocalMode = _this$state3.isLocalMode,
        isShowOption = _this$state3.isShowOption,
        _rootWidthStyle = (0, _crStyleWidth["default"])(width, rootStyle),
        _crAfterInputEl = (0, _crAfterInputEl2["default"])(this.props, this.state, this._refArrowCell, this._hToggleOptions),
        placeholder = _crAfterInputEl[0],
        afterInputEl = _crAfterInputEl[1],
        domOptions = this._createDomOptionsWithCache(),
        _crFooterIndex2 = _crFooterIndex(this.state),
        nFiltered = _crFooterIndex2[0],
        nAll = _crFooterIndex2[1];

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: _CL.CL_ROOT,
      style: _rootWidthStyle,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        ref: this._refDomInputText,
        className: _CL.CL_INPUT,
        type: "text",
        name: "select" //autoComplete="off"
        ,
        autoCorrect: "off",
        autoCapitalize: "off",
        spellCheck: false,
        value: value,
        placeholder: placeholder,
        onChange: this._hInputChange,
        onKeyDown: this._hInputKeyDown
      }), afterInputEl, /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {
        className: _CL.CL_INPUT_HR
      }), (isLocalMode || isShowOption) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_DivOptions["default"], {
        refOptionsComp: this._refOptionsComp,
        refIndexNode: this._refIndexNode,
        rootOptionsStyle: rootOptionsStyle,
        width: width,
        isShowOption: isShowOption,
        domOptions: domOptions,
        indexActiveOption: this.indexActiveOption,
        nFiltered: nFiltered,
        nAll: nAll,
        onStepUp: this._stepUpOption,
        onStepDown: this._stepDownOption,
        onClear: this.clearInput
      })]
    });
  };

  _proto.focusInput = function focusInput() {
    this.domInputText.focus();
  };

  _proto.focusNotValidInput = function focusNotValidInput() {
    this.domInputText.focus();
  };

  return InputSelect;
}(_uiApi.Component);

InputSelect.defaultProps = {
  propCaption: 'caption',
  ItemOptionComp: _ItemOptionDf["default"],
  options: [],
  optionName: '',
  optionNames: '',
  isWithInput: false,
  onSelect: FN_NOOP,
  onLoadOption: FN_NOOP
};
var _default = InputSelect;
exports["default"] = _default;
//# sourceMappingURL=InputSelect.js.map
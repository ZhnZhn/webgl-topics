//import PropTypes from 'prop-types'
import { Component } from '../uiApi';

import ItemOptionDf from './ItemOptionDf'
import DivOptions from './DivOptions';
import OptionStack from './OptionStack';
import {
  CL_ROOT,
  CL_INPUT,
  CL_INPUT_HR,
  CL_OPTIONS_ROW_ACTIVE
} from './CL';

import crStyleWidth from './crStyleWidth';
import crAfterInputEl from './crAfterInputEl';
import crFilteredOptions from './crFilteredOptions';

const _isNumber = n => typeof n === 'number'
  && n-n === 0;

const _toItem = (
  item,
  propCaption
) => ({
  [propCaption]: 'From Input',
  value: item.inputValue
});

const _crFooterIndex = ({
  options,
  initialOptions
}) => [
  options[0] && options[0].value !== 'noresult'
     ? options.length
     : 0,
  initialOptions
     ? initialOptions.length
     : 0
];

const _crInitialStateFromProps = ({
  optionName,
  optionNames,
  options
}) => ({
  value: '',
  isShowOption: false,
  initialOptions: options,
  options: options,
  optionNames: optionNames || optionName || '',
  isValidDomOptionsCache: false,
  isLocalMode: false
});

const FN_NOOP = () => {};

const _getDataIndex = comp => {
  const { dataset } = comp
  , { index } = dataset || {};
  return Number(index);
};

const _makeVisibleActiveRowComp = (
  comp
) => {
  if (comp) {
    const  { offsetTop } = comp
    , optionsElement = comp.parentElement
    , { scrollTop } = optionsElement;
    if (offsetTop - scrollTop > 70){
       optionsElement.scrollTop += offsetTop - scrollTop - 70;
    }
    if (offsetTop - scrollTop < 0){
      optionsElement.scrollTop = 0;
    }
  }
}

class InputSelect extends Component {
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

  static defaultProps = {
    propCaption: 'caption',
    ItemOptionComp: ItemOptionDf,
    options: [],
    optionName: '',
    optionNames: '',
    isWithInput: false,
    onSelect: FN_NOOP,
    onLoadOption: FN_NOOP
  }

  constructor(props){
    super(props)
    this._initFromProps(props)
    this.state = _crInitialStateFromProps(props)
  }

  _initFromProps = () => {
    this.domOptionsCache = null
    this.indexActiveOption = 0
  }

  componentDidUpdate(prevProps, prevState){
     //Decorate Active Option
     if (this.state.isShowOption){
       const comp = this._getActiveItemComp();
       this._decorateActiveRowComp(comp);
       _makeVisibleActiveRowComp(comp);
    }
  }

  _setStateToInit = (props) => {
    this._initFromProps(props)
    this.setState(_crInitialStateFromProps(props))
  }

  _getActiveItemComp = () => {
    return ((this.optionsComp || {}).childNodes || [])[this.indexActiveOption];
  }
  _decorateActiveRowComp = (comp) => {
    if (comp){
      this._activeItem = comp
      comp.classList.add(CL_OPTIONS_ROW_ACTIVE);
      const dataIndex = _getDataIndex(comp);
      if (this.indexNode && _isNumber(dataIndex)) {
        this.indexNode.textContent = dataIndex + 1
      }
    }
  }
  _undecorateActiveRowComp = (comp) => {
     const _comp = comp || this._getActiveItemComp();
     if (_comp){
      _comp.classList.remove(CL_OPTIONS_ROW_ACTIVE);
     }
  }

  _hInputChange = (event) => {
    const token = event.target.value
    , {
      isWithInput,
      propCaption
    } = this.props
    , {
      value,
      options,
      initialOptions
    } = this.state
    , tokenLn = token.length
    , valueLn = value.length
    if (tokenLn !== valueLn){
      this._undecorateActiveRowComp()
      this.indexActiveOption = 0;
      this.setState({
        value: token,
        isShowOption: true,
        isValidDomOptionsCache: false,
        options: crFilteredOptions(
          token,
          tokenLn > valueLn
            ? options
            : initialOptions,
          propCaption,
          isWithInput
        )
      })
    }
  }

  _stepDownOption = (optionsLength) => {
    const prevComp = this._getActiveItemComp();

    if (prevComp){
       this._undecorateActiveRowComp(prevComp);

       this.indexActiveOption += 1;
       if (this.indexActiveOption>=optionsLength){
          this.indexActiveOption = 0;
          this.optionsComp.scrollTop = 0;
       }

       const nextComp = this._getActiveItemComp();
       this._decorateActiveRowComp(nextComp)

       const offsetTop = nextComp.offsetTop
       const scrollTop = this.optionsComp.scrollTop;
       if ( (offsetTop - scrollTop) > 70){
          this.optionsComp.scrollTop += (offsetTop - scrollTop - 70);
       }
    }
  }

  _stepUpOption = (optionsLength) => {
    const prevComp = this._getActiveItemComp();
    if (prevComp){
      this._undecorateActiveRowComp(prevComp);

      this.indexActiveOption -= 1;
      if (this.indexActiveOption < 0){
        this.indexActiveOption = optionsLength - 1;        
        const bottomComp = this._getActiveItemComp()
        this.optionsComp.scrollTop = bottomComp.offsetTop
      }

      const nextComp = this._getActiveItemComp();
      this._decorateActiveRowComp(nextComp);

      const offsetTop = nextComp.offsetTop;
      const scrollTop = this.optionsComp.scrollTop;
      if ( (offsetTop - scrollTop) < 70){
        this.optionsComp.scrollTop -= ( 70 - (offsetTop - scrollTop) );
      }
    }
  }

  _hInputKeyDown = (event) => {
    switch(event.keyCode){
      // enter
      case 13:{
         const {
           onSelect,
           isWithInput,
           propCaption
         } = this.props;
         if (_isNumber(this.indexActiveOption)) {
            const item = this.state.options[this.indexActiveOption];

            if (item && item[propCaption]){
              const _item = item.value !== 'noresult'
                ? item
                : isWithInput
                    ? _toItem(item, propCaption)
                    : void 0
              onSelect(_item)
              this.setState({
                value: item[propCaption],
                isShowOption: false,
                isValidDomOptionsCache: true
              });
            }
         } else {
           onSelect()
         }
      break; }
      //escape, delete
      case 27: case 46: {
        event.preventDefault()
        if (this.state.isShowOption){
          this.setState({ isShowOption : false });
        } else {
          this._undecorateActiveRowComp();
          this._setStateToInit(this.props);
          this.props.onSelect();
        }
      break;}
      //down
      case 40: {
        const {
          isShowOption,
          options
        } = this.state;
        if (!isShowOption){
          this.setState({ isShowOption: true })
        } else {
          event.preventDefault()
          this._stepDownOption(options.length)
        }
        break;}
      //up
      case 38: {
        const {
          isShowOption,
          options
        } = this.state;
        if (isShowOption){
          event.preventDefault()
          this._stepUpOption(options.length)
        }
        break;}
      default: return;
    }
  }

  _hToggleOptions = () => {
    this.setState(prevState => ({
      ...prevState,
      isShowOption: !prevState.isShowOption
    }))
  }

  _hClickItem = (item, event) => {
    const {
      propCaption,
      onSelect
    } = this.props
    this._undecorateActiveRowComp()
    this.indexActiveOption = _getDataIndex(event.currentTarget)
    this.setState({
      value: item[propCaption],
      isShowOption: false
    });
    onSelect(item);
  }

  _refOptionsComp = c => this.optionsComp = c
  _refIndexNode = n => this.indexNode = n

  _createDomOptionsWithCache = () => {
    const {
      ItemOptionComp,
      propCaption
    } = this.props
    , {
      options,
      isValidDomOptionsCache
    } = this.state;

    const _domOptions = isValidDomOptionsCache
      ? this.domOptionsCache
      : (<OptionStack
           options={options}
           indexActiveOption={this.indexActiveOption}
           propCaption={propCaption}
           ItemOptionComp={ItemOptionComp}
           onClick={this._hClickItem}
         />);

    this.domOptionsCache = _domOptions
    this._optionCacheLength = options.length
    return _domOptions;
  }

  _hClickBtUp = () => {
    this._stepUpOption(this._optionCacheLength)
  }
  _hClickBtDown = () => {
    this._stepDownOption(this._optionCacheLength)
  }

  _refArrowCell = c => this.arrowCell = c
  _refDomInputText = c => this.domInputText = c

  render(){
    const {
      rootStyle,
      width,
      rootOptionsStyle
    } = this.props
    , {
      value,
      isLocalMode,
      isShowOption
    } = this.state
    , _rootWidthStyle = crStyleWidth(width, rootStyle)
    , [
      placeholder,
      afterInputEl
    ] = crAfterInputEl(
       this.props,
       this.state,
       this._refArrowCell,
       this._hToggleOptions
     )
    , domOptions = this._createDomOptionsWithCache()
    , [
      nFiltered,
      nAll
    ] = _crFooterIndex(this.state);


    return (
      <div
        className={CL_ROOT}
        style={_rootWidthStyle}
      >
        <input
           ref={this._refDomInputText}
           className={CL_INPUT}
           type="text"
           name="select"
           //autoComplete="off"
           autoCorrect="off"
           autoCapitalize="off"
           spellCheck={false}
           value={value}
           placeholder={placeholder}
           onChange={this._hInputChange}
           onKeyDown={this._hInputKeyDown}
        />
        {afterInputEl}
        <hr className={CL_INPUT_HR} />
        {(isLocalMode || isShowOption)
          && <DivOptions
            refOptionsComp={this._refOptionsComp}
            refIndexNode={this._refIndexNode}
            rootOptionsStyle={rootOptionsStyle}
            width={width}
            isShowOption={isShowOption}
            domOptions={domOptions}
            indexActiveOption={this.indexActiveOption}
            nFiltered={nFiltered}
            nAll={nAll}
            onStepUp={this._hClickBtUp}
            onStepDown={this._hClickBtDown}
            onClear={this.clearInput}
          />}
      </div>
    )
  }

  clearInput = () => {
    const { onSelect } = this.props;
    this._undecorateActiveRowComp()
    onSelect(void 0)
    this._setStateToInit(this.props)
  }

  focusInput(){
    this.domInputText.focus()
  }
  focusNotValidInput(){
    this.domInputText.focus()
  }

}

export default InputSelect

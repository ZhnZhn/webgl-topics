//import PropTypes from 'prop-types'
import {
  useRef,
  useState,
  useCallback,
  useEffect,
  getRefValue
} from '../uiApi';

import useProperty from '../hooks/useProperty';

import ItemOptionDf from './ItemOptionDf'
import DivOptions from './DivOptions';
import OptionStack from './OptionStack';
import {
  CL_ROOT,
  CL_INPUT,
  CL_INPUT_HR,
} from './CL';

import crStyleWidth from './crStyleWidth';
import crAfterInputEl from './crAfterInputEl';
import crFilteredOptions from './crFilteredOptions';

import useOptionDecorator from './useOptionDecorator';
import useStepHandlers from './useStepHandlers';

import {
  isNumber,
  getDataIndex
} from './helperFns';

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

const DF_OPTIONS = [];
const _crInitialStateFromProps = ({
  optionName,
  optionNames,
  options=DF_OPTIONS
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

   onSelect: PropTypes.func,
}
*/

const InputSelect = (props) => {
  const {
    rootStyle,
    width,
    rootOptionsStyle,

    propCaption='caption',
    ItemOptionComp=ItemOptionDf,

    isWithInput=false,
    onSelect=FN_NOOP
  } = props
  , _refArrowCell = useRef()
  , _refDomInputText = useRef()
  , _refOptionsComp = useRef()
  , _refIndexNode = useRef()
  , [
    setOptionsCache,
    getOptionsCache
  ] = useProperty(null)
  , [
    setOptionsCacheLength,
    getOptionsCacheLength
  ] = useProperty(0)
  , [
    setActiveIndexOption,
    getActiveIndexOption
  ] = useProperty(0)
  , [
    state,
    setState
  ] = useState(() => _crInitialStateFromProps(props))
  , {
    isShowOption,
    isValidDomOptionsCache,
    isLocalMode,
    value,
    options,
    initialOptions
  } = state
  /*eslint-disable react-hooks/exhaustive-deps */
  , _setStateToInit = useCallback(() => {
    setState(() => _crInitialStateFromProps(props))
    setOptionsCache(null)
    setOptionsCacheLength(0)
    setActiveIndexOption(0)
  }, [props])
  /*eslint-enable react-hooks/exhaustive-deps */
  , _getActiveItemComp = useCallback(() =>{
    return ((getRefValue(_refOptionsComp) || {}).childNodes || [])[getActiveIndexOption()];
  }, [getActiveIndexOption])
  , [
    _decorateActiveRowComp,
    _undecorateActiveRowComp
  ] = useOptionDecorator(
      _refIndexNode,
      _getActiveItemComp
    )
  , _hInputChange = (event) => {
    const token = event.target.value
    , tokenLn = token.length
    , valueLn = value.length
    if (tokenLn !== valueLn){
      const _activeIndexOption = getActiveIndexOption();
      if (_activeIndexOption !== 0) {
        _undecorateActiveRowComp()
        setActiveIndexOption(0)
      }
      setState({
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
  , [
    _stepDownOption,
    _stepUpOption
  ] = useStepHandlers(
    _refOptionsComp,
    _getActiveItemComp,
    _decorateActiveRowComp,
    _undecorateActiveRowComp,
    setActiveIndexOption,
    getActiveIndexOption
  )
  , _hInputKeyDown = (event) => {
    switch(event.keyCode){
      // enter
      case 13:{
         const _indexActiveOption = getActiveIndexOption()
         if (isNumber(_indexActiveOption)) {
            const item = options[_indexActiveOption];

            if (item && item[propCaption]){
              const _item = item.value !== 'noresult'
                ? item
                : isWithInput
                    ? _toItem(item, propCaption)
                    : void 0
              onSelect(_item)
              setState(prevState => ({
                ...prevState,
                value: item[propCaption],
                isShowOption: false,
                isValidDomOptionsCache: true
              }));
            }
         } else {
           onSelect()
         }
      break; }
      //escape, delete
      case 27: case 46: {
        event.preventDefault()
        if (isShowOption){
          setState(prevState => ({
            ...prevState,
            isShowOption: false
          }))
        } else {
          _undecorateActiveRowComp();
          _setStateToInit()
          onSelect();
        }
      break;}
      //down
      case 40: {

        if (!isShowOption){
          setState(prevState => ({
            ...prevState,
            isShowOption: true
          }))
        } else {
          event.preventDefault()
          _stepDownOption(options.length)
        }
        break;}
      //up
      case 38: {
        if (isShowOption){
          event.preventDefault()
          _stepUpOption(options.length)
        }
        break;}
      default: return;
    }
  }
  , _hToggleOptions = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      isShowOption: !prevState.isShowOption
    }))
  }, [])
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hClickItem = useCallback((item, event) => {
    _undecorateActiveRowComp()
    setActiveIndexOption(getDataIndex(event.currentTarget))
    setState(prevState => ({
      ...prevState,
      value: item[propCaption],
      isShowOption: false
    }))
    onSelect(item);
  }, [])
  /*eslint-enable react-hooks/exhaustive-deps */

  , _createDomOptionsWithCache = () => {
    const _domOptions = isValidDomOptionsCache
      ? getOptionsCache()
      : (<OptionStack
           options={options}
           indexActiveOption={getActiveIndexOption()}
           propCaption={propCaption}
           ItemOptionComp={ItemOptionComp}
           onClick={_hClickItem}
         />);
    setOptionsCache(_domOptions)
    setOptionsCacheLength(options.length)
    return _domOptions;
  }
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hClickBtUp = useCallback(() => {
    _stepUpOption(getOptionsCacheLength())
  }, [])
  , _hClickBtDown = useCallback(() => {
    _stepDownOption(getOptionsCacheLength())
  }, [])
  /*eslint-enable react-hooks/exhaustive-deps */

  , clearInput = () => {
    _undecorateActiveRowComp()
    onSelect()
    _setStateToInit()
  }

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (isShowOption) {
      const comp = _getActiveItemComp();
      _decorateActiveRowComp(comp);
      _makeVisibleActiveRowComp(comp);
    }
  }, [isShowOption])
  // _decorateActiveRowComp, _getActiveItemComp
  /*eslint-enable react-hooks/exhaustive-deps */

  const indexActiveOption = getActiveIndexOption()
  , _rootWidthStyle = crStyleWidth(width, rootStyle)
  , [
    placeholder,
    afterInputEl
  ] = crAfterInputEl(
     props,
     state,
     _refArrowCell,
     _hToggleOptions
   )
  , domOptions = _createDomOptionsWithCache()
  , [
    nFiltered,
    nAll
  ] = _crFooterIndex(state);


  return (
    <div
      className={CL_ROOT}
      style={_rootWidthStyle}
    >
      <input
         ref={_refDomInputText}
         className={CL_INPUT}
         type="text"
         name="select"
         //autoComplete="off"
         autoCorrect="off"
         autoCapitalize="off"
         spellCheck={false}
         value={value}
         placeholder={placeholder}
         onChange={_hInputChange}
         onKeyDown={_hInputKeyDown}
      />
      {afterInputEl}
      <hr className={CL_INPUT_HR} />
      {(isLocalMode || isShowOption)
        && <DivOptions
          refOptionsComp={_refOptionsComp}
          refIndexNode={_refIndexNode}
          rootOptionsStyle={rootOptionsStyle}
          width={width}
          isShowOption={isShowOption}
          domOptions={domOptions}
          indexActiveOption={indexActiveOption}
          nFiltered={nFiltered}
          nAll={nAll}
          onStepUp={_hClickBtUp}
          onStepDown={_hClickBtDown}
          onClear={clearInput}
        />}
    </div>
  );
}

export default InputSelect

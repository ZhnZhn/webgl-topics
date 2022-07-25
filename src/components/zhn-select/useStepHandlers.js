import {
  useMemo,
  getRefValue
} from '../uiApi';

/*eslint-disable react-hooks/exhaustive-deps */
const useStepHandlers = (
  refOptionsComp,
  getActiveElement,
  decorateActiveElement,
  undecorateActiveElement,
  setActiveIndexOption,
  getActiveIndexOption
) => useMemo(() => [
  //stepDownOption
  (optionsLength) => {
    const prevComp = getActiveElement();

    if (prevComp){
       undecorateActiveElement(prevComp);
       const _optionsComp = getRefValue(refOptionsComp);

       setActiveIndexOption(getActiveIndexOption()+1)
       if (getActiveIndexOption() >= optionsLength){
          setActiveIndexOption(0)
          _optionsComp.scrollTop = 0
       }

       const nextComp = getActiveElement();
       decorateActiveElement(nextComp)

       const offsetTop = nextComp.offsetTop
       const scrollTop = _optionsComp.scrollTop;
       if ((offsetTop - scrollTop) > 70){
          _optionsComp.scrollTop += (offsetTop - scrollTop - 70);
       }
    }
  },
  //stepUpOption
  (optionsLength) => {
    const prevComp = getActiveElement();
    if (prevComp){
      undecorateActiveElement(prevComp);
      const _optionsComp = getRefValue(refOptionsComp);

      setActiveIndexOption(getActiveIndexOption() - 1)

      if (getActiveIndexOption() < 0){
        setActiveIndexOption(optionsLength - 1)
        const bottomComp = getActiveElement()
        _optionsComp.scrollTop = bottomComp.offsetTop
      }

      const nextComp = getActiveElement();
      decorateActiveElement(nextComp);

      const offsetTop = nextComp.offsetTop;
      const scrollTop = _optionsComp.scrollTop;
      if ((offsetTop - scrollTop) < 70){
        _optionsComp.scrollTop -= (70 - (offsetTop - scrollTop) );
      }
    }
  }
], [])
// _refOptionsComp,
// _getActiveItemComp, _decorateActiveRowComp, _undecorateActiveRowComp,
// getActiveIndexOption, setActiveIndexOption
/*eslint-enable react-hooks/exhaustive-deps */


export default useStepHandlers

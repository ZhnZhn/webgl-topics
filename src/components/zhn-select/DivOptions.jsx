import {
  CL_OPTIONS,
  CL_OPTIONS_DIV
} from './CL';

import crStyleWidth from './crStyleWidth';
import OptionsFooter from './OptionsFooter';

const S_BLOCK = { display: 'block' }
, S_NONE = { display: 'none' };

const DivOptions = ({
  refOptionsComp,
  refIndexNode,
  rootOptionsStyle,
  width,
  isShowOption,
  domOptions,
  indexActiveOption,
  nFiltered,
  nAll,
  onStepUp,
  onStepDown,
  onClear
}) => {
  const _styleOptions = isShowOption
    ? S_BLOCK
    : S_NONE
  , _rootWidthStyle = crStyleWidth(width, _styleOptions)

  return (
    <div
       className={CL_OPTIONS}
       style={_rootWidthStyle}
       data-scrollable={true}
     >
      <div
         ref={refOptionsComp}
         className={CL_OPTIONS_DIV}
         style={{...rootOptionsStyle, ..._rootWidthStyle}}
       >
        {domOptions}
      </div>
      <OptionsFooter
        refIndexNode={refIndexNode}
        indexActiveOption={indexActiveOption}
        nAll={nAll}
        nFiltered={nFiltered}
        onStepUp={onStepUp}
        onStepDown={onStepDown}
        onClear={onClear}
      />
    </div>
  );
}

export default DivOptions

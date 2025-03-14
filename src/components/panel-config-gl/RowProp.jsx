import {
  useRef,
  useCallback,
  getRefValue
} from '../uiApi';

import Label from '../zhn-atoms/Label';
import InputFloat from '../zhn-atoms/InputFloat';
import ButtonSet from '../zhn-atoms/ButtonSet';

const S_ROW = {
  marginTop: 12,
  display: 'flex',
  alignItems: 'center'
}
, S_LABEL = {
  color: 'grey',
  paddingLeft: 20,
  paddingRight: 4,
  fontWeight: 'bold',
  fontSize: '16px'
}
, S_INPUT_FLOAT = {
  width: 45
}
, FN_NOOP = () => {};

const _getInputMode = (
  inputMode
) => inputMode === 0
  ? 0
  : inputMode === 1
      ? 1
      : 2;

const INPUT_KEY = 'inputFloat';

const RowProp = ({
  inputId,
  labelBy,
  value,
  propKey,
  styleLabel,
  onGetComp,
  fnAfterSet=FN_NOOP
}) => {
  const _refInputFloat = useRef()
  , _refBt = useRef()
  , _refMode = useRef({
      [INPUT_KEY]: 2,
      bt: 2
  })
  , _onChangeMode = useCallback((
       inputKey,
       nextMode
     ) => {
        const mode = getRefValue(_refMode)
        mode[INPUT_KEY] = nextMode;
        const _nextBtMode = _getInputMode(nextMode);
        if (mode.bt !== _nextBtMode){
          mode.bt = _nextBtMode
          getRefValue(_refBt).setMode(_nextBtMode)
        }
  }, [])
  , _setModeToAll = useCallback(value => {
      const mode = getRefValue(_refMode);
      mode[INPUT_KEY] = value
      mode.bt = value
      getRefValue(_refInputFloat).setMode(value)
      getRefValue(_refBt).setMode(value)
  }, [])
  , _hSetValue = useCallback(() => {
      const comp = onGetComp();
      comp[propKey] = getRefValue(_refInputFloat).getValue();
      fnAfterSet(comp);
      _setModeToAll(2);
  }, [propKey, onGetComp, fnAfterSet, _setModeToAll]);

  return (
    <div style={S_ROW}>
      <Label
        id={inputId}
        style={{...S_LABEL, ...styleLabel}}
        title={labelBy}
      />
      <InputFloat
        refEl={_refInputFloat}
        id={inputId}
        inputKey={INPUT_KEY}
        inputStyle={S_INPUT_FLOAT}
        initialValue={value}
        step={0.001}
        onChangeMode={_onChangeMode}
        onKeyDownEnter={_hSetValue}
      />
      <ButtonSet
        refEl={_refBt}
        onClick={_hSetValue}
      />
    </div>
  );
};

/*
RowProp.ropTypes = {
  inputId: PropTypes.string.isRequired,
  labelBy: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  propKey: PropTypes.string.isRequired,
  styleLabel: PropTypes.object,
  onGetComp: PropTypes.func.isRequired,
  fnAfterSet: PropTypes.func
}
*/

export default RowProp

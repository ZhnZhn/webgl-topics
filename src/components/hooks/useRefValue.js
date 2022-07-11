import {
  useRef,
  getRefValue
} from '../uiApi';

const useRefValue = (
  value
) => getRefValue(useRef(value));

export default useRefValue

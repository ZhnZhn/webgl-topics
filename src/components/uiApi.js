export {
  render
} from 'react-dom';

export {
  forwardRef,
  useRef,
  useState,
  useReducer,
  useMemo,
  useCallback,
  useEffect,
  useImperativeHandle
} from 'react';

export const getRefValue = ref => (ref || {}).current

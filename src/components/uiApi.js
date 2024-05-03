export {
  render,

  useRef,
  useState,
  useReducer,
  useMemo,
  useCallback,
  useEffect,
  useImperativeHandle
} from 'preact/compat';

export const getRefValue = ref => (ref || {}).current

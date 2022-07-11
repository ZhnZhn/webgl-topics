export {
  Component,
  forwardRef,
  useRef,
  useState,
  useMemo,
  useCallback,
  useImperativeHandle
} from 'react';

export const getRefValue = ref => (ref || {}).current

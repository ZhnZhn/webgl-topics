export {
  Component,
  forwardRef,
  useRef,
  useState,
  useMemo,
  useCallback,
  useEffect,
  useImperativeHandle
} from 'react';

export const getRefValue = ref => (ref || {}).current

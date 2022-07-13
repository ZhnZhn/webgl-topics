import {
  forwardRef,
  useRef,
  useCallback,
  useImperativeHandle,
  getRefValue
} from '../uiApi';

import useRerender from '../hooks/useRerender';
import useAnimationGL from './gl-hooks/useAnimationGL';

import Button from '../zhn-atoms/Button';
import TopicLink from './TopicLink';

const WIDTH = 500
, HEIGHT = 500
, S_ROOT = {
  position : 'relative',
  float : 'left'
}
, S_CANVAS = {
  borderRadius: '2px'
}
, S_BT_RUN = {
  position: 'absolute',
  top: 8,
  right : 8
};


const WebGLTopic = forwardRef((
  props,
  ref
) => {
  const _refCanvas = useRef()
  , _refConfig = useRef({
    isAnimate: true,
    isStopDraw: false
  })
  , rerender = useRerender()
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hClickCanvas = useCallback(() => {
    _refConfig.current.isAnimate = !getRefValue(_refConfig).isAnimate
    rerender()
  }, [])
  //rerender
  /*eslint-enable react-hooks/exhaustive-deps */

  useAnimationGL(_refCanvas, _refConfig, props)
  useImperativeHandle(ref, () => getRefValue(_refConfig))

  const {
    valuesForInit
  } = props
  , {
    isAnimate
  } = getRefValue(_refConfig) || {};

  return (
    <div style={S_ROOT}>
      <canvas
         ref={_refCanvas}
         width={WIDTH}
         height={HEIGHT}
         style={S_CANVAS}
         onClick={_hClickCanvas}
      >
        Your browser doesn't appear to support the
        <code>&lt;canvas&gt;</code> element.
      </canvas>
      {
        !isAnimate && <Button
          caption="Run Animation"
          style={S_BT_RUN}
          onClick={_hClickCanvas}
       />
      }
      <TopicLink
        config={valuesForInit}
      />
    </div>
  );
})

export default WebGLTopic

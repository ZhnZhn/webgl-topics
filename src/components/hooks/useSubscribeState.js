import {
  useState,
  useEffect
} from '../uiApi';

/*eslint-disable react-hooks/exhaustive-deps */
const useSubscribeState = (
  store,
  selector
) => {
  const [
    state,
    setState
  ] = useState();

  useEffect(
    () => store.subscribe(selector, setState),
    []
  )
  //store, selector

  return state;

}
/*eslint-disable react-hooks/exhaustive-deps */

export default useSubscribeState

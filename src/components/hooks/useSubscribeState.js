import {
  useState,
  useEffect
} from '../uiApi';

const useSubscribeState = (
  store,
  selector
) => {
  const [
    state,
    setState
  ] = useState();

/*eslint-disable react-hooks/exhaustive-deps */
  useEffect(
    () => store.subscribe(selector, setState),
    []
  )
  //store, selector
  /*eslint-enable react-hooks/exhaustive-deps */
  
  return state;
}


export default useSubscribeState

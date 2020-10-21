import { render } from 'react-dom';

import App from './components/AppWebGLTopic';
import Store from './flux/stores/WebGlTopicStore';

render(<App store={Store} />, document.getElementById("app"));

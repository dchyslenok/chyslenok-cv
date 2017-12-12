import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from '../src/store';

import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>,
  document.getElementById('root')
);



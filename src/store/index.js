import { createStore, applyMiddleware} from 'redux';
import { routerMiddleware } from 'react-router-redux'
import history from '../history'
import reducers from '../reducers';

const store = createStore(reducers, applyMiddleware(routerMiddleware(history)));

window.store = store;

export default store;

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import app from './app'

const initialState = {
  isAuthenticated: false
}

const authReducer = (state = initialState , action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return {
        ...state,
        isAuthenticated: true
      }
    case 'AUTH_FAIL':
      return {
        ...state,
        isAuthenticated: false
      }
    default:
      return state
  }
}

export default combineReducers({
  app: app,
  router: routerReducer,
  authReducer
});
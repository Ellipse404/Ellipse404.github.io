import { combineReducers } from 'redux'
import basic from './basic';

const appReducers = combineReducers({
  basic,
})
console.log("check reducer => ",basic.countNumbers)

const rootReducer = (state, action) => {
  return appReducers(state, action)
  }

  export default rootReducer
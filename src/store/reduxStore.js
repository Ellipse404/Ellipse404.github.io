import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import Reducer from './reducer/index'

const reduxStore = createStore( Reducer, composeWithDevTools(applyMiddleware(thunk)));

export default reduxStore
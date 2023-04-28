import {combineReducers} from 'redux';
import { cartReducer } from './reducer';

const rootReducer = combineReducers({
    cartTrolly : cartReducer,
})

export default rootReducer
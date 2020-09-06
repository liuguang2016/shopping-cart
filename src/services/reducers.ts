import { combineReducers } from 'redux';
import cartReducer from './cart/reducer';
import totalReducer from './total/reducer';

export default combineReducers({
  cart: cartReducer,
  total: totalReducer,
});

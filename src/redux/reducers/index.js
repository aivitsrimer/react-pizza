import filter from './filters';
import pizzas from './pizzas';
import cart from './cart';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  filters: filter,
  pizzas: pizzas,
  cart: cart,
});

export default rootReducer;

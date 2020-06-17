import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { adminReducer } from './adminReducer';

const rootReducer = combineReducers({
  admin: adminReducer
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);


store.subscribe(() => {
  console.log('updated state: ', store.getState());
});

export default store;

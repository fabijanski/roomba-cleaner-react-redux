import { createStore, combineReducers } from 'redux';
import hooverReducer from './reducers/hooverReducer';
import roomReducer from './reducers/roomReducer';

const rootReducer = combineReducers({
  hoover: hooverReducer,
  room: roomReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;

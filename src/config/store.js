import { createStore, combineReducers } from 'redux';
import hooverReducer from '../features/hoover/reducer';
import roomReducer from '../features/room/reducer';

const rootReducer = combineReducers({
  hoover: hooverReducer,
  room: roomReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;

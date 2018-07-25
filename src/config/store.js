import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import hooverReducer from './reducers/hooverReducer';
import roomReducer from './reducers/roomReducer';
import wrapperReducer from './reducers/wrapperReducer';


const rootReducer = combineReducers({
  hoover: hooverReducer,
  room: roomReducer,
  wrapper: wrapperReducer,
});

const enhancers = [
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
];
const middleware = [
  thunk,
];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer,
  composedEnhancers
);

export default store;

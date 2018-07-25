import {
  FETCH_DATA_PENDING,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
} from '../constants';


const initialState = {
  pending: false,
  data: {},
  error: null,
  stateInitialized: false,
};

function wrapperReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_PENDING:
      return {
        ...state,
        pending: true,
        data: {},
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        pending: false,
        data: action.response,
        error: null,
        stateInitialized: true,
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        pending: true,
        data: {},
        error: 'Fetching error!'
      };
    default:
      return state;
  }
}

export default wrapperReducer;

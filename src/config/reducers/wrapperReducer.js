import {
  FETCH_DATA_PENDING,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
} from '../constants';

const initialState = {
  pending: false,
  data: {},
  error: null,
};


function wrapperReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_PENDING:
      return {
        pending: true,
        data: {},
        error: null
      };
    case FETCH_DATA_SUCCESS:
      return {
        pending: false,
        data: action.response,
        error: null
      };
    case FETCH_DATA_ERROR:
      return {
        pending: true,
        data: {},
        error: 'Fetching error!'
      };
    default:
      return state;
  }
}

export default wrapperReducer;

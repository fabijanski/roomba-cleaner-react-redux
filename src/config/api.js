import {
  fetchData,
  fetchDataError,
  fetchDataSuccess,
} from './actions';
import { TEXT_DATA_URL } from './constants';
import { parseTextData } from './helpers';

export const dataRequest = () => (dispatch) => {
  dispatch(fetchData());
  
  return fetch(TEXT_DATA_URL)
    .then(response => response.text())
    .catch(error => dispatch(fetchDataError(error)))
    .then(response => {
      const parsedData = parseTextData(response);
      dispatch(fetchDataSuccess(parsedData))
    });
};

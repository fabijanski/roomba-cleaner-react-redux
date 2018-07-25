import {
  CLEAN_DIRT,
  INIT_ROOM_STATE,
} from '../constants';


const initialState = {
  roomDimensions: [],
  dirtCoordinates: [],
};

function removeDirt(dirtCoordinates, hooverPosition) {
  return dirtCoordinates.filter((item) => item[0] !== hooverPosition[0] || item[1] !== hooverPosition[1]);
}

const roomReducer = (state = initialState, action) => {
  switch(action.type) {
    case INIT_ROOM_STATE:
      return {
        roomDimensions: action.roomDimensions,
        dirtCoordinates: action.dirtCoordinates,
      };
    case CLEAN_DIRT:
      return {
        ...state,
        dirtCoordinates: removeDirt(state.dirtCoordinates, action.hooverPosition),
      };
    default:
      return state;
  }
};

export default roomReducer;

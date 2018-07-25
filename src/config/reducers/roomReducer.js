import {
  CLEAN_DIRT,
  INIT_ROOM_STATE,
} from '../constants';


const initialState = {
  roomDimensions: [],
  dirtCoordinates: [],
  stateInitialized: false,
  removedPatches: 0
};

function removeDirt(dirtCoordinates, hooverPosition) {
  return dirtCoordinates.filter((item) => (item[0] !== hooverPosition[0] || item[1] !== hooverPosition[1]));
}

function increaseCleanedCounter(dirtCoordinates, hooverPosition) {
  return dirtCoordinates.some(elem => elem.toString() === hooverPosition.toString()) ? 1 : 0;
}

const roomReducer = (state = initialState, action) => {
  switch(action.type) {
    case INIT_ROOM_STATE:
      return {
      ...state,
        roomDimensions: action.roomDimensions,
        dirtCoordinates: action.dirtCoordinates,
        stateInitialized: true,
      };
    case CLEAN_DIRT:
      return {
        ...state,
        dirtCoordinates: removeDirt(state.dirtCoordinates, action.hooverPosition),
        removedPatches: state.removedPatches + increaseCleanedCounter(state.dirtCoordinates, action.hooverPosition),
      };
    default:
      return state;
  }
};

export default roomReducer;

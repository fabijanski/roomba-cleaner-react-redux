import {
  CLEAN_DIRT,
} from "../hoover/constants";

const initialState = {
  dirtCoordinates: [
    [1,0],
    [1,2],
    [3,4],
    [2,3],
    [4,0],
  ],
  roomDimensions: [5,5],
};

function cleanDirt(dirtCoordinates, hooverPosition) {
  console.log('hooverPosition', hooverPosition);
  return dirtCoordinates.filter((item) => item[0] !== hooverPosition[0] || item[1] !== hooverPosition[1]);

}

const roomReducer = (state = initialState, action) => {
  switch(action.type) {
    case CLEAN_DIRT:
      return {
        ...state,
        dirtCoordinates: cleanDirt(state.dirtCoordinates, action.hooverPosition),
      };
    default:
      return state;
  }
};

export default roomReducer;

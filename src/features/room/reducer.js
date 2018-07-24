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

const roomReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'REMOVE_DIRT':
      return {
        ...state,
        dirtCoordinates: action.dirtCoordinates,
      };
    default:
      return state;
  }
};

export default roomReducer;

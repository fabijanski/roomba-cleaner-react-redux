const initialState = {
  dirtCoordinates: [
    [1,2],
    [3,4],
    [2,3],
    [4,0],
  ]
};

const roomReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default roomReducer;
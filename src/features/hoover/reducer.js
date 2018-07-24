const initialState = {
  position: [0, 0],
};

const hooverReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'MOVE_HOOVER':
      return {
        position: action.position,
      };
    default:
      return state;
  }
};

export default hooverReducer;

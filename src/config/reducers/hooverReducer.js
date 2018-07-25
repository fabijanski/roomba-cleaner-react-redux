import {
  MOVE_HOOVER,
  AVAILABLE_DIRECTIONS,
  INIT_HOOVER_STATE
} from '../constants';

function getNewPosition(oldPosition, direction) {

  if (!oldPosition) {
    return;
  }

  switch(direction) {
    case 'N':
      return [ oldPosition[0], oldPosition[1] + 1 ];
    case 'S':
      return [ oldPosition[0], oldPosition[1] - 1 ];
    case 'E':
      return [ oldPosition[0] + 1, oldPosition[1] ];
    case 'W':
      return [ oldPosition[0] - 1, oldPosition[1] ];
    default:
      return console.log('Unknown position')
  }
}

function observeBoundaries(oldPosition, newPosition) {
  if (!oldPosition) {
    return;
  }

  return (
    (newPosition[0] >=0 && newPosition[0] < 5) &&
    (newPosition[1] >=0 && newPosition[1] < 5)
      ? newPosition : oldPosition
  )
}

function dispatchMove(hooverPosition, direction) {
  if (!AVAILABLE_DIRECTIONS.includes(direction)) {
    return; // todo error handling
  }

  return observeBoundaries(hooverPosition, getNewPosition(hooverPosition, direction));
}

const initialState = {
  position: [],
  directions: []
};

const hooverReducer = (state = initialState, action) => {
  switch(action.type) {
    case INIT_HOOVER_STATE:
      return {
        position: action.position,
        directions: action.directions
      };
    case MOVE_HOOVER:
      const hooverPosition = dispatchMove(state.position, action.direction);
      return {
        ...state,
        position: hooverPosition,
      };
    default:
      return state;
  }
};

export default hooverReducer;

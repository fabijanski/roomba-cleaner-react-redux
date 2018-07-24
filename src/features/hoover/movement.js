import store from '../../config/store';
import { ROOM_HEIGHT, ROOM_WIDTH } from '../../config/variables';


export default function handleMovement(hoover) {
  const moves = 'ENNNSSSEWWWW'.split('');
  
  function getNewPosition(direction) {
    const oldPosition = store.getState().hoover.position;
    
    switch(direction) {
      case 'NORTH':
        return [ oldPosition[0], oldPosition[1] + 1 ];
      case 'SOUTH':
        return [ oldPosition[0], oldPosition[1] - 1 ];
      case 'EAST':
        return [ oldPosition[0] + 1, oldPosition[1] ];
      case 'WEST':
        return [ oldPosition[0] - 1, oldPosition[1] ];
      default:
        return console.log('Unknown position')
    }
  }
  
  function observeBoundaries(oldPosition, newPosition) {
    return (
      (newPosition[0] >=0 && newPosition[0] < ROOM_WIDTH) &&
      (newPosition[1] >=0 && newPosition[1] < ROOM_HEIGHT)
      ? newPosition : oldPosition
    )
  }
  
  let delayTime = 0;
  
  function dispatchMove(direction) {
    const oldPosition = store.getState().hoover.position;
  
    setTimeout(() => {
      return store.dispatch({
        type: 'MOVE_HOOVER',
        payload: {
          position: observeBoundaries(oldPosition, getNewPosition(direction))
        }
      })
    }, delayTime);
  }
  
  moves.map(direction => {
    delayTime += 1000;
    switch(direction) {
      case 'N':
        return dispatchMove('NORTH');
      case 'S':
        return dispatchMove('SOUTH');
      case 'E':
        return dispatchMove('EAST');
      case 'W':
        return dispatchMove('WEST');
      default:
        return console.log('Unknown direction');
    }
  });
  
  return hoover;
}

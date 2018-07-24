import store from '../../config/store';
import handleDirtRemoving from '../room/dirtRemoving';

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
      (newPosition[0] >=0 && newPosition[0] < 5) &&
      (newPosition[1] >=0 && newPosition[1] < 5)
      ? newPosition : oldPosition
    )
  }
  
  // function observeDirtPatches(hooverPosition, dirtCoordinates) {
  //   return dirtCoordinates.map((item, index) => {
  //     (item[0] === hooverPosition[0] && item[1] === hooverPosition[1])
  //       ? dirtCoordinates.splice(index, 1)
  //       : dirtCoordinates;
  //   });
  // }
  
  let delayTime = 0;
  
  function dispatchMove(direction) {
    
    const oldPosition = store.getState().hoover.position;
    const hooverPosition = store.getState().hoover.position;
    const dirtCoordinates = store.getState().room.dirtCoordinates;
  
    handleDirtRemoving(hooverPosition, dirtCoordinates);
    setTimeout(() => {
      return store.dispatch(
        {
          type: 'MOVE_HOOVER',
          position: observeBoundaries(oldPosition, getNewPosition(direction))
        },
      )
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
//
// const mapStateToProps = state => ({
//   hooverPosition:
// })

import store from '../../config/store';

export default function handleDirtRemoving(hooverPosition, dirtCoordinates) {
  console.log(hooverPosition);
  console.log(dirtCoordinates);
  
  
  dirtCoordinates.map((item, index) => {
    (item[0] === hooverPosition[0] && item[1] === hooverPosition[1])
      ? removeDirtPatch(index)
      : null;
  });
  
  function removeDirtPatch(index) {
    return store.dispatch(
      {
        type: 'REMOVE_DIRT',
        dirtCoordinates: dirtCoordinates.splice(index, 1)
      }
    )
  }
}


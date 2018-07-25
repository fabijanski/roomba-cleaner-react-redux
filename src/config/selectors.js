export const getRoomWidth = state => state.room.roomDimensions[0] || 5;
export const getRoomHeight = state => state.room.roomDimensions[1] || 5;
export const getDirtCoordinates = state => state.room.dirtCoordinates;

export const getHooverPosition = state => state.hoover.position || [0, 0];
export const getDirections = state => state.hoover.directions || ['N', 'N'];


export const initHooverPosition = state => state.wrapper.data.position;
export const initDirections = state => state.wrapper.data.directions;
export const initDirtCoordinates = state => state.wrapper.data.dirtCoordinates;
export const initRoomDimensions = state => state.wrapper.data.roomDimensions;

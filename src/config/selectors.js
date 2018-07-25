export const getRoomWidth = state => state.room.roomDimensions[0] || 5;
export const getRoomHeight = state => state.room.roomDimensions[1] || 5;
export const getDirtCoordinates = state => state.room.dirtCoordinates;

export const getHooverPosition = state => state.hoover.position || [];
export const getDirections = state => state.hoover.directions || [];

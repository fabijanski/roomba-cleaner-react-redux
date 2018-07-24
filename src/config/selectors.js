export const getRoomWidth = state => state.room.roomDimensions[0];
export const getRoomHeight = state => state.room.roomDimensions[1];
export const getDirtCoordinates = state => state.room.dirtCoordinates;

export const getHooverPosition = state => state.hoover.position || [];

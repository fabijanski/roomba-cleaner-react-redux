export const getRoomWidth = state => state.room.roomDimensions[0];
export const getRoomHeight = state => state.room.roomDimensions[1];
export const getDirtCoordinates = state => state.room.dirtCoordinates;
export const getRemovedPatchesCount = state => state.room.removedPatches;

export const getHooverPosition = state => state.hoover.position;
export const getDirections = state => state.hoover.directions;

export const stateInitialized = state => state.room.stateInitialized && state.hoover.stateInitialized;

export const initHooverPosition = state => state.wrapper.data.position;
export const initDirections = state => state.wrapper.data.directions;
export const initDirtCoordinates = state => state.wrapper.data.dirtCoordinates;
export const initRoomDimensions = state => state.wrapper.data.roomDimensions;

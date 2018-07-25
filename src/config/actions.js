import {
  MOVE_HOOVER,
  CLEAN_DIRT,
  INIT_ROOM_STATE,
  INIT_HOOVER_STATE,
} from './constants';

export const moveHoover = (direction) => ({ type: MOVE_HOOVER, direction});
export const cleanDirt = (hooverPosition) => ({ type: CLEAN_DIRT, hooverPosition});
export const initRoomState = (roomDimensions, dirtCoordinates) => ({ type: INIT_ROOM_STATE, roomDimensions, dirtCoordinates });
export const initHooverState = (position, directions) => ({ type: INIT_HOOVER_STATE, position, directions });

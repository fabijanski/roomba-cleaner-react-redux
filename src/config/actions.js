import {
  MOVE_HOOVER,
  CLEAN_DIRT,
  INIT_ROOM_STATE,
  INIT_HOOVER_STATE,
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from './constants';

export const moveHoover = direction => ({ type: MOVE_HOOVER, direction});
export const cleanDirt = (hooverPosition) => ({ type: CLEAN_DIRT, hooverPosition});

export const initRoomState = (roomDimensions, dirtCoordinates) => ({ type: INIT_ROOM_STATE, roomDimensions, dirtCoordinates });
export const initHooverState = (position, directions) => ({ type: INIT_HOOVER_STATE, position, directions });

export const fetchData = () => ({ type: FETCH_DATA_PENDING });
export const fetchDataSuccess = response => ({ type: FETCH_DATA_SUCCESS, response });
export const fetchDataError = error => ({ type: FETCH_DATA_ERROR, error });

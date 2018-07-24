import store from './store';

export const ROOM_WIDTH = store.getState().room.roomDimensions[0];
export const ROOM_HEIGHT = store.getState().room.roomDimensions[1];

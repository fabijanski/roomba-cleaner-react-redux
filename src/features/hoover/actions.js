import {
  MOVE_HOOVER,
  CLEAN_DIRT,
} from "./constants";

export const moveHoover = (direction) => ({ type: MOVE_HOOVER, direction});
export const cleanDirt = (hooverPosition) => ({ type: CLEAN_DIRT, hooverPosition});

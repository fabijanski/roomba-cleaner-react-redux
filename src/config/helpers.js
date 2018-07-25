import {
  AVAILABLE_DIRECTIONS,
} from './constants';


export const parseTextData = textData => {
  const rows = textData.split("\n");
  
  const regExpValue = `[${AVAILABLE_DIRECTIONS.join('').toString()}]+`;
  const validateDirs = new RegExp(regExpValue, "g");
  
  const filteredRows = rows.filter(row => row.length > 0 );
  
  return {
    roomDimensions: filteredRows[0]
      .split(' ')
      .map(num => parseInt(num, 10)),
    position: filteredRows[1]
      .split(' ')
      .map(num => parseInt(num, 10)),
    dirtCoordinates: filteredRows
      .slice(2, filteredRows.length - 1)
      .map(row => row.split(' ')
      .map(num => parseInt(num, 10))),
    directions: filteredRows[filteredRows.length - 1]
      .toUpperCase()
      .match(validateDirs)
      .join('')
      .split('')
  };
};


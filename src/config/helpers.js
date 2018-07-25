export const parseTextData = textData => {
  const rows = textData.split("\n");

  // remove empty rows
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
      .split('')
  };
};

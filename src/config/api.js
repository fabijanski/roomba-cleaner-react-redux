export const fetchData = dataUrl => {
  return fetch(dataUrl)
    .then(data => data.text())
    .then(text => parseData(text));
};

function parseData(textData) {
  const rows = textData.split("\n");
  
  // remove empty rows
  const filteredRows = rows.filter(row => row.length > 0 );
  
  return {
    roomDimensions: filteredRows[0]
      .split(' ')
      .map(num => parseInt(num)),
    position: filteredRows[1]
      .split(' ')
      .map(num => parseInt(num)),
    dirtCoordinates: filteredRows
      .slice(2, filteredRows.length - 1)
      .map(row => row.split(' ')
      .map(num => parseInt(num))),
    directions: filteredRows[filteredRows.length - 1]
      .split('')
  };
}

const CODES = {
  A: 65,
  Z: 90,
};

function createCell() {
  return `
    <div class="cell" contenteditable></div>
  `;
}

function createColumn(col) {
  return `<div class="column">${col}</div>`;
}

function createRow(index, content) {
  return `
    <div class="row">
      <div class="row-info">${index || ''}</div>
      <div class="row-data">${content}</div>
    </div>
  `;
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const columns = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(createColumn)
      .join('');

  rows.push(createRow(null, columns));

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(createCell)
        .join('');

    rows.push(createRow(i + 1, cells));
  }

  return rows.join('');
}


//       return `
//       <div class="row">
//         <div class="row-info"></div>
//         <div class="row-data">
//           <div class="column">A</div>
//           <div class="column">B</div>
//           <div class="column">C</div>
//         </div>
//       </div>
//       <div class="row">
//         <div class="row-info">1</div>
//         <div class="row-data">
//           <div class="cell selected" contenteditable>A1</div>
//           <div class="cell" contenteditable>B1</div>
//           <div class="cell" contenteditable>C1</div>
//         </div>
//         </div>
//       <div class="row">
//         <div class="row-info">2</div>
//         <div class="row-data">
//           <div class="cell" contenteditable>A2</div>
//           <div class="cell" contenteditable>B2</div>
//           <div class="cell" contenteditable>C2</div>
//         </div>
//       </div>
//     `;

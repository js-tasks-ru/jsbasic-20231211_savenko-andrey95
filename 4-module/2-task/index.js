function makeDiagonalRed(table) {
  let len = table.rows.length;
  for (let i = 0; i < len; i++) {
    table.rows[i].cells[i].style.backgroundColor = "red";
  }
}

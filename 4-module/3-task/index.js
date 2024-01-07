function highlight(table) {
  let allRows = table.rows;
  for (row of allRows) {
    if (row.cells[3].dataset.available === "true") {
      row.classList.add("available");
    } else if (row.cells[3].dataset.available === "false") {
      row.classList.add("unavailable");
    } else row.hidden = true;

    if (row.cells[2].textContent == "m") {
      row.classList.add("male");
    } else row.classList.add("female");

    if (row.cells[1].textContent < 18) {
      row.style = "text-decoration: line-through";
    }
  }
}

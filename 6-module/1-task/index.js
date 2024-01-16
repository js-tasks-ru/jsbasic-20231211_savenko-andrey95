/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = document.createElement("table");
    this.createTable();
  }

  createTable() {
    this.elem.insertAdjacentHTML(
      "afterbegin",
      `
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
        </tr>
      </thead>
    `
    );

    let tbody = document.createElement("tbody");
    this.elem.append(tbody);

    this.rows.forEach((element) => {
      tbody.insertAdjacentHTML(
        "afterbegin",
        `
        <tr>
          <td>${element.name}</td>
          <td>${element.age}</td>
          <td>${element.salary}</td>
          <td>${element.city}</td>
          <td><button>X</button></td>
        </tr>
        `
      );
    });

    let arrButton = this.elem.querySelectorAll("button");

    for (let button of arrButton) {
      button.addEventListener("click", (event) => {
        event.target.closest("tr").remove();
      });
    }
  }
}

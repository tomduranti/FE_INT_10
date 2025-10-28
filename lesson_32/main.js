// 1.Create an html-page for displaying and editing text.
// When opening the page, the text should be displayed with div tag.
// When clicking Ctrl+E, textarea appears instead of div and can be edited.
// When pressing Ctrl+S, the div with edited text appears instead of textarea.
// Don’t forget to turn off default settings for these hotkey combinations.

const div = document.createElement("div");
let text = document.createTextNode("Hello, world!");
const textArea = document.createElement("textarea");
const el = document.querySelector("div");

document.body.appendChild(textArea);
div.appendChild(text);
document.body.appendChild(div);

textArea.style.display = "none"

document.addEventListener("DOMContentLoaded", () => {

    document.addEventListener("keydown", openTextArea);
    function openTextArea(e) {

        if (e.ctrlKey && e.key === "e") {
            e.preventDefault();
            div.style.display = "none";
            textArea.style.display = "";
        }
    }

    textArea.addEventListener("input", () => { text.textContent = textArea.value; })

    document.addEventListener("keydown", closeTextArea);
    function closeTextArea(e) {
        if (e.ctrlKey && e.key === "s") {
            e.preventDefault();
            div.style.display = "";
            textArea.style.display = "none";
        }
    }
}
)

// 2.Create an html-page with a large table.
// When clicking the column heading, it is necessary to sort data of that column.
// Note that numerical values should be sorted as numbers, not as strings.
const products = [
  { product: "MacBook Pro", price: 1200, producer: "Apple" },
  { product: "iPhone 15", price: 800, producer: "Apple" },
  { product: "Sony WH-1000XM5", price: 150, producer: "Sony" },
  { product: "iPad Air", price: 600, producer: "Apple" },
  { product: "Apple Watch Series 9", price: 250, producer: "Apple" },
  { product: "Microsoft Surface Keyboard", price: 100, producer: "Microsoft" },
  { product: "Microsoft Surface Mouse", price: 50, producer: "Microsoft" },
  { product: "Dell UltraSharp Monitor", price: 300, producer: "Dell" },
  { product: "HP LaserJet Printer", price: 200, producer: "HP" },
  { product: "WD My Passport", price: 12, producer: "Western Digital" },
];
// functions
function createElements(tagName, className = "", textNode = "") {
  const el = document.createElement(tagName);
  if (className) el.classList.add(className);
  if (textNode) el.appendChild(document.createTextNode(textNode));
  return el;
}

function sortTable(index) { //index = 0, 1, 2

  rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[index].textContent;
    const cellB = rowB.cells[index].textContent;
    //number sort
    if (Number.isInteger(+cellA) && Number.isInteger(+cellB)) { return cellA - cellB; }
    //string sort
    return cellA.localeCompare(cellB);
  }
  )
  //append sorted rows to table
  for (const row of rows) {
    tblBody.appendChild(row)
  }
}

const tbl = createElements("table");
const tblHead = tbl.createTHead();
const tr = createElements("tr", "");

document.body.appendChild(tbl);
tbl.appendChild(tblHead);
tblHead.appendChild(tr);

// create headers
Object.keys(products[0]).forEach((key) => {
  const th = createElements("th", "thead");
  th.appendChild(document.createTextNode(key));
  tr.appendChild(th);
});

// create rows
const tblBody = tbl.createTBody();
for (const item of products) {
  const row = createElements("tr");
  Object.values(item).forEach((value) => {
    const cell = createElements("td");
    cell.appendChild(document.createTextNode(value));
    row.appendChild(cell);
  });
  tblBody.appendChild(row);
}

// sort rows
const tableBody = document.querySelectorAll("tbody")[0]; //object
const rows = Array.from(tableBody.querySelectorAll("tbody > tr"));

//eventhandlers: TODO add unsortTable() and store original array
document.addEventListener("DOMContentLoaded", () => {
  const trHead = document.querySelectorAll(".thead");
  trHead[0].addEventListener("click", function() { sortTable(0) });
  // trHead[0].addEventListener("click", function() { unsortTable() });
  trHead[1].addEventListener("click", function() { sortTable(1) });
  trHead[2].addEventListener("click", function() { sortTable(2) });
})
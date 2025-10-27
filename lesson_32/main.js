// 1.Create an html-page for displaying and editing text.
// When opening the page, the text should be displayed with div tag.
// When clicking Ctrl+E, textarea appears instead of div and can be edited.
// When pressing Ctrl+S, the div with edited text appears instead of textarea.
// Don’t forget to turn off default settings for these hotkey combinations.

// const div = document.createElement("div");
// let text = document.createTextNode("Hello, world!");
// const textArea = document.createElement("textarea");
// const el = document.querySelector("div");

// document.body.appendChild(textArea);
// div.appendChild(text);
// document.body.appendChild(div);

// textArea.style.display = "none"

// document.addEventListener("DOMContentLoaded", () => {

//     document.addEventListener("keydown", openTextArea);
//     function openTextArea(e) {

//         if (e.ctrlKey && e.key === "e") {
//             e.preventDefault();
//             div.style.display = "none";
//             textArea.style.display = "";
//         }
//     }

//     textArea.addEventListener("input", () => { text.textContent = textArea.value; })

//     document.addEventListener("keydown", closeTextArea);
//     function closeTextArea(e) {
//         if (e.ctrlKey && e.key === "s") {
//             e.preventDefault();
//             div.style.display = "";
//             textArea.style.display = "none";
//         }
//     }
// }
// )

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

function createElements(tagName, className = "", textNode = "") {
  const el = document.createElement(tagName);
  if (className) el.classList.add(className);
  if (textNode) el.appendChild(document.createTextNode(textNode));
  return el;
}

const tbl = createElements("table");
const tblHead = tbl.createTHead();
const tr = createElements("tr");

document.body.appendChild(tbl);
tbl.appendChild(tblHead);
tblHead.appendChild(tr);

// create headers; assumes that all objects have the same properties!
Object.keys(products[0]).forEach((key) => {
  const th = createElements("th", "th-head");
  th.appendChild(document.createTextNode(key));
  tr.appendChild(th);
});

//create rows
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

// TODO: create a sort function that sorts rows based on columns
// https://wpdatatables.com/javascript-sorting-tables/
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement/cells
// const tableBody = document.querySelectorAll("tbody")[0];
// console.log(tableBody.rows[0].cells[2])


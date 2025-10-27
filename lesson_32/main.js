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
  { product: "Laptop", price: 1200 },
  { product: "Smartphone", price: 800 },
  { product: "Headphones", price: 150 },
  { product: "Tablet", price: 600 },
  { product: "Smartwatch", price: 250 },
  { product: "Keyboard", price: 100 },
  { product: "Mouse", price: 50 },
  { product: "Monitor", price: 300 },
  { product: "Printer", price: 200 },
  { product: "External Hard Drive", price: 12 }
];

const headers = ["Product", "Price"];

function createElements(tagName, className = "", textNode = "") {
    const el = document.createElement(tagName);
    if (className) el.classList.add(className);
    if (textNode) el.appendChild(document.createTextNode(textNode));
    return el
};

const tbl = createElements("table");
const tblHead = tbl.createTHead();
const tr = createElements("tr");
const td = createElements("td");

document.body.appendChild(tbl);
tbl.appendChild(tblHead)
tblHead.appendChild(tr)

// create headers: TODO build a function that loops through obj keys
for (const header of headers) {
    const th = createElements("th");
    th.appendChild(document.createTextNode(header));
    tr.appendChild(th)
}

// TODO: build table body and populate
const tblBody = tbl.createTBody();

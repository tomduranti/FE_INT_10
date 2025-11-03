import { openTextArea, closeTextArea, createElements, sortTable, populateTblHead, populateTblBody } from "./utils.js"

// 1.Create an html-page for displaying and editing text.
// When opening the page, the text should be displayed with div tag.
// When clicking Ctrl+E, textarea appears instead of div and can be edited.
// When pressing Ctrl+S, the div with edited text appears instead of textarea.
// Don’t forget to turn off default settings for these hotkey combinations.

const div = document.createElement("div");
let text = document.createTextNode("");
const textArea = document.createElement("textarea");
const el = document.querySelector("div");

document.body.appendChild(textArea);
div.appendChild(text);
document.body.appendChild(div);

textArea.style.display = "none"

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", (e) => openTextArea(e, div, textArea));
  textArea.addEventListener("input", () => { text.textContent = textArea.value; })
  document.addEventListener("keydown", (e) => closeTextArea(e, div, textArea));
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

const tbl = createElements("table");
const tblHead = tbl.createTHead();
const tr = createElements("tr", "");
document.body.appendChild(tbl);
tbl.appendChild(tblHead);
tblHead.appendChild(tr);

// // create table headers
const trHead = populateTblHead(products, tr);

// // create table body
const originalTbl = populateTblBody(products, tbl.createTBody());
// const originalTblCopy = originalTbl.cloneNode(true);

// // // sort rows
const sortedRows = Array.from(originalTbl.querySelectorAll("tbody > tr"));

// // eventhandlers: TODO add unsortTable() and store original array
document.addEventListener("DOMContentLoaded", () => {
  const trHeadSelected = Array.from(trHead.querySelectorAll("tr > th"))
  trHeadSelected[0].addEventListener("click", function() { sortTable(0, originalTbl, sortedRows, tbl) });
  trHeadSelected[1].addEventListener("click", function() { sortTable(1, originalTbl, sortedRows, tbl) });
  trHeadSelected[2].addEventListener("click", function() { sortTable(2, originalTbl, sortedRows, tbl) });
})

// 3.Create an html-page with a text block in a frame.
// Execute the possibility to change the size of the block when holding the mouse cursor in the bottom right corner and pull it further.
const frame = createElements("div", "frame", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
document.body.appendChild(frame);
const draggableItem = createElements("div", "draggable-item");
frame.appendChild(draggableItem)

document.addEventListener("DOMContentLoaded", () => {

    draggableItem.addEventListener("mousedown", (e) => {
        let dragging = true;
        const startClientX = e.clientX;
        const startClientY = e.clientY;
        const startWidth = frame.offsetWidth;
        const startHeight = frame.offsetHeight;

        document.body.addEventListener("mousemove", (e) => {
            if (dragging) {
                let deltaX = e.clientX - startClientX;
                let deltaY = e.clientY - startClientY;
                //update frame size
                frame.style.width = (startWidth + deltaX) + "px";
                frame.style.height = (startHeight + deltaY) + "px";
            }
        })

        document.body.addEventListener("mouseup", (e) => { dragging = false; })
    })
})
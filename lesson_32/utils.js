export function openTextArea(e, div, textArea) {
    if (e.ctrlKey && e.key === "e") {
        e.preventDefault();
        div.style.display = "none";
        textArea.style.display = "";
    }
}

export function closeTextArea(e, div, textArea) {
    if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        div.style.display = "";
        textArea.style.display = "none";
    }
}

export function createElements(tagName, className = "", textNode = "") {
    const el = document.createElement(tagName);
    if (className) el.classList.add(className);
    if (textNode) el.appendChild(document.createTextNode(textNode));
    return el;
}

export function populateTblHead(data, table_row) {
    // data is arr of objects and all objects have the same properties
    Object.keys(data[0]).forEach((key) => {
        const th = createElements("th", "thead");
        th.appendChild(document.createTextNode(key));
        table_row.appendChild(th);
    }
    )
    return table_row;
}

export function populateTblBody(data, table_to_append) {

    for (const item of data) {
        const row = createElements("tr");
        Object.values(item).forEach((value) => {
            const cell = createElements("td");
            cell.appendChild(document.createTextNode(value));
            row.appendChild(cell);
        });
        table_to_append.appendChild(row);
    }
    return table_to_append;
}

export function sortTable(index, table_to_append, rows_to_append, tableBody) {

    rows_to_append.sort((rowA, rowB) => {
        const cellA = rowA.cells[index].textContent;
        const cellB = rowB.cells[index].textContent;
        //number sort
        if (Number.isInteger(+cellA) && Number.isInteger(+cellB)) return cellA - cellB;
        //string sort
        return cellA.localeCompare(cellB);
    }
    )
    //append sorted rows to table
    for (const row of rows_to_append) table_to_append.appendChild(row);
    return tableBody.appendChild(table_to_append)
}
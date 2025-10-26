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
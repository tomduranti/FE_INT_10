// 1. Create a page that displays a numbered list of tracks:
let playList = [
    { author: "LED ZEPPELIN", song: "STAIRWAY TO HEAVEN" },
    { author: "QUEEN", song: "BOHEMIAN RHAPSODY" },
    { author: "LYNYRD SKYNYRD", song: "FREE BIRD" },
    { author: "DEEP PURPLE", song: "SMOKE ON THE WATER" },
    { author: "JIMI HENDRIX", song: "ALL ALONG THE WATCHTOWER" },
    { author: "AC/DC", song: "BACK IN BLACK" },
    { author: "QUEEN", song: "WE WILL ROCK YOU" },
    { author: "METALLICA", song: "ENTER SANDMAN" }
];

// functions
function createElements(tagName, className = "", textNode = "") {
    const el = document.createElement(tagName);
    if (className) el.classList.add(className);
    if (textNode) el.appendChild(document.createTextNode(textNode));
    return el
};

function populateList(arr) {
    for (const item of arr) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${item.song} (${item.author})`));
        ul.appendChild(li);
    }
};

function setStyle(el, property, value) { return el.style[property] = value };

// html
const title = createElements("h1", "title", "Greatest Rock Hits Of All Time");
const subtitle = createElements("h2", "subtitle", "Timeless Songs That Redefined Music Forever");
const ul = createElements("ul");
const pageWrapper = createElements("div", "page-wrapper");
const titleSection = createElements("div", "title-section");
const listSection = createElements("div", "list-section");

document.body.appendChild(pageWrapper);
pageWrapper.appendChild(titleSection);
pageWrapper.appendChild(listSection);
titleSection.appendChild(title);
titleSection.appendChild(subtitle);
populateList(playList);
listSection.appendChild(ul);

// CSS
setStyle(document.body, "backgroundImage", "radial-gradient(circle at center, rgba(0,0,0,0.9) 55%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.4) 80%), url('./assets/rock_background.webp')");
setStyle(document.body, "backgroundSize", "cover");
setStyle(document.body, "backgroundPosition", "center");
setStyle(listSection, "lineHeight", "2");
setStyle(listSection, "maxWidth", "90%");
setStyle(listSection, "textAlign", "center");
setStyle(listSection, "overflowWrap", "break-word");
setStyle(pageWrapper, "fontFamily", "Lucida Console");
setStyle(pageWrapper, "color", "whitesmoke");
setStyle(pageWrapper, "textShadow", "0px 0px 10px black");
setStyle(pageWrapper, "display", "flex");
setStyle(pageWrapper, "flexDirection", "column");
setStyle(pageWrapper, "alignItems", "center");
setStyle(pageWrapper, "justifyContent", "center");
setStyle(pageWrapper, "minHeight", "100vh");
setStyle(subtitle, "fontSize", "1.3rem");
setStyle(title, "fontSize", "2rem");
setStyle(titleSection, "maxWidth", "90%");
setStyle(titleSection, "textAlign", "center");
setStyle(titleSection, "overflowWrap", "break-word");
setStyle(ul, "listStyleType", "none");
setStyle(ul, "fontSize", "1rem");
setStyle(ul, "paddingInlineStart", "0");
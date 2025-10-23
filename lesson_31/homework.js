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

// create html elements
const pageWrapper = document.createElement("div");
const titleSection = document.createElement("div")
const listSection = document.createElement("div");
const title = document.createElement("h1");
const subtitle = document.createElement("h2");
const ul = document.createElement("ul");
const viewport = document.createElement("meta");

document.head.appendChild(viewport);
document.body.appendChild(pageWrapper);
pageWrapper.appendChild(titleSection);
pageWrapper.appendChild(listSection);
titleSection.appendChild(title);
titleSection.appendChild(subtitle);
listSection.appendChild(ul);

// populate nodes
for (item of playList) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${item.song} by ${item.author}`));
    ul.appendChild(li);
};

viewport.setAttribute("name", "viewport");
viewport.setAttribute("content", "width=device-width, initial-scale=1");
pageWrapper.setAttribute("class", "page-wrapper");
titleSection.setAttribute("class", "title-section");
listSection.setAttribute("class", "list-section");
ul.style.listStyleType = "none";

title.appendChild(document.createTextNode("Greatest Rock Hits Of All Time"));
subtitle.appendChild(document.createTextNode("Timeless Songs That Redefined Music Forever"));

// add some styling to the page
title.style.fontSize = "2rem";
subtitle.style.fontSize = "1.3rem";
ul.style.fontSize = "1rem";

pageWrapper.style.fontFamily = "Lucida Console";
pageWrapper.style.color = "whitesmoke";
pageWrapper.style.textShadow = "0px 0px 10px black";
listSection.style.lineHeight = "2";
document.body.style.backgroundImage = "radial-gradient(circle at center, rgba(0,0,0,0.9) 55%,  rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.4) 80%), url('./assets/rock_background.webp')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";

titleSection.style.maxWidth = "90%"
listSection.style.maxWidth = "90%";

pageWrapper.style.display = "flex";
pageWrapper.style.flexDirection = "column";
pageWrapper.style.alignItems = "center";
pageWrapper.style.justifyContent = "center";
pageWrapper.style.minHeight = "100vh"
titleSection.style.textAlign = "center";
listSection.style.textAlign = "center";
titleSection.style.overflowWrap = "break-word"
listSection.style.overflowWrap = "break-word"
ul.style.padding = "0";

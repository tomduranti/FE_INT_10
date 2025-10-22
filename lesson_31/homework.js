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
pageWrapper.setAttribute("class", "page-wrapper");
titleSection.setAttribute("class", "title-section");
listSection.setAttribute("class", "list-section");
ul.style.listStyleType = "none";

title.appendChild(document.createTextNode("Greatest Rock Hits of All Time"));
subtitle.appendChild(document.createTextNode("Epic Anthems That Redefined Music and Echo Timelessly"));

// add some styling to the page
pageWrapper.style.fontFamily = "Lucida Console";
pageWrapper.style.color = "white";
document.body.style.backgroundImage = "url('./assets/rock_background.jpg')";
const myName = document.querySelector("#myName");
const myQuote = document.querySelector("#myQuote");
const textString = myName.textContent;
const QuoteString = myQuote.textContent;
const splittedText = textString.split("");
const splittedQuote = QuoteString.split("");
const TLDR_Button = document.querySelector("#TLDR_RADIO");
const DETAILED_BUTTON = document.querySelector("#DETAILED_RADIO");
const about_content_container = document.getElementById("left-text-cont");
const about_text_node = document.createElement('p');
about_content_container.appendChild(about_text_node);


myName.textContent = "";

myQuote.innerHTML = myQuote.textContent.replace(/\S/g,"<span class='letterQuote'>$&</span>");

for(let i=0; i< splittedText.length; i++){
    if(splittedText[i]=="."){
        myName.innerHTML += "<span class='letter' id='periodPoint'>" + splittedText[i] + "</span>";
    }
    else{
        myName.innerHTML += "<span class='letter'>" + splittedText[i] + "</span>";
    }
}
anime.timeline({loop: false})
    .add({
    targets: '#myName .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutCubic",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i,
    })
    .add({
        targets: '#periodPoint',
        color : '#f94c57',
    },"-=1000")
    .add({
        targets: '.letterQuote',
        translateY: [100,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 300 + 30 * i
    },"-=1200");

const tldr_text = document.createTextNode("A Biochemist that has a passion for programming.");
const detailed_text = document.createTextNode("Hi! I'm Amine Abdelaziz, I'm a biochemist by day, and a programmer by night\
, ...");


if(TLDR_Button.checked){
    writeAboutContent("TLDR");
}
else{
    writeAboutContent("DETAILED");
}

function writeAboutContent(type){
    if(type=="TLDR"){
        about_text_node.replaceChildren(tldr_text);
        about_content_container.replaceChildren(about_text_node);
    }
    else{
        about_text_node.replaceChildren(detailed_text);
        about_content_container.replaceChildren(about_text_node);
    }
}

TLDR_Button.addEventListener("click", ()=>{writeAboutContent("TLDR")});
DETAILED_BUTTON.addEventListener("click", ()=>{writeAboutContent("DETAILED")});



let mysvgObject = document.getElementById("my-svg1");


window.addEventListener('DOMContentLoaded', function () {
    if(mysvgObject){
        new Vivus('my-svg1', { duration: 150 }, );
        new Vivus('my-svg2', { duration: 150 }, );
    }
    new Vivus('my-svg1', { duration: 150 }, );
    new Vivus('my-svg2', { duration: 150 }, );
    // let svgdoc = mysvgObject.contentDocument;
    // console.log(svgdoc);
});



//This helper function deserves a nobel prize
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}



// // Add a timeout of 5 seconds before starting the animation, but you can
// //use a click even or anything else..
// setTimeout(function () {
//   // Add the trigger class to the SVG
//   let mysvg1 = document.getElementById("my-svg1").contentDocument;
//   console.log(mysvg1);

// }, 5000);

const myName = document.querySelector("#myName");
const myQuote = document.querySelector("#myQuote");
const textString = myName.textContent;
const QuoteString = myQuote.textContent;
const splittedText = textString.split("");
const splittedQuote = QuoteString.split("");
const TLDR_Button = document.querySelector("#TLDR_RADIO");
const DETAILED_BUTTON = document.querySelector("#DETAILED_RADIO");
const about_content_container = document.getElementById("left-text-cont");
const about_text_node = document.getElementById("ABOUT_PAR");
const about_text_TLDR = document.getElementById("__TLDR__");
const about_text_DETAILED = document.getElementById("__DETAILED__");


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



if(TLDR_Button.checked){
    writeAboutContent("TLDR");
}
else{
    writeAboutContent("DETAILED");
}

function writeAboutContent(type){
    if(type=="TLDR"){
        about_text_node.replaceChildren(about_text_TLDR);
        about_content_container.replaceChildren(about_text_node);
    }
    else{
        about_text_node.replaceChildren(about_text_DETAILED);
        about_content_container.replaceChildren(about_text_node);
    }
}

TLDR_Button.addEventListener("click", ()=>{
    writeAboutContent("TLDR")});
DETAILED_BUTTON.addEventListener("click", ()=>{
    writeAboutContent("DETAILED")});



let mysvgObject = document.getElementById("my-svg1");


window.addEventListener('DOMContentLoaded', function () {
    if(mysvgObject){
        new Vivus('my-svg1', { duration: 150 }, );
        new Vivus('my-svg2', { duration: 150 }, );
    }
    else{
        new Vivus('my-svg1', { duration: 150 }, );
        new Vivus('my-svg2', { duration: 150 }, );
    }


});



//This helper function deserves a nobel prize, it abstracts the question "is my element visible on screen right now ?" to a simple yes or no question.
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

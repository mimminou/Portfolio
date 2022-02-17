const myName = document.querySelector("#myName");
const myQuote = document.querySelector("#myQuote");
const textString = myName.textContent;
const QuoteString = myQuote.textContent;
const splittedText = textString.split("");
const splittedQuote = QuoteString.split("");
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
    },"-=1250")
    .add({
        targets: '.letterQuote',
        translateY: [100,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 300 + 30 * i
    },"-=1200");

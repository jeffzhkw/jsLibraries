var redElem = document.getElementsByClassName("red")[0]
var greenElem = document.getElementsByClassName("green")[0]
var blueElem = document.getElementsByClassName("blue")[0]
var result = document.getElementsByClassName("result")[0]


var rellax = new Rellax('.rellax');

const el = document.querySelector('img');
const observer = lozad('.lozad', {
    loaded: function(el) {
        el.classList.add('fade');
    }
}) 
observer.observe();

redElem.addEventListener("scroll", function () {
    r = calcRGB(redElem.scrollTop)
    g = calcRGB(greenElem.scrollTop)
    b = calcRGB(blueElem.scrollTop)
    console.log(r, g, b)
    setStyle(r,g,b)
});

greenElem.addEventListener("scroll", function () {
    r = calcRGB(redElem.scrollTop)
    g = calcRGB(greenElem.scrollTop)
    b = calcRGB(blueElem.scrollTop)
    console.log(r, g, b)
    setStyle(r,g,b)
});

blueElem.addEventListener("scroll", function () {
    r = calcRGB(redElem.scrollTop)
    g = calcRGB(greenElem.scrollTop)
    b = calcRGB(blueElem.scrollTop)
    console.log(r, g, b)
    setStyle(r,g,b)
});

function calcRGB(pos){
    var scrollMax = 2696 - window.outerHeight;
    return pos/scrollMax * 255;
    
}
function rgb(r,g,b) {
    return 'rgb(' + [(r||0),(g||0),(b||0)].join(', ') + ')';
}

function setStyle(r,g,b){
    redElem.style.backgroundColor = rgb(r,0,0)
    greenElem.style.backgroundColor = rgb(0,g,0)
    blueElem.style.backgroundColor = rgb(0,0,b)
    result.style.backgroundColor = rgb(r,g,b)
    result.innerHTML = rgb(r,g,b)
    
}


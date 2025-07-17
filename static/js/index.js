window.addEventListener('load', function() {
  setTimeout(function() {
    document.querySelector('.loader-container').classList.add('loaded');
    document.querySelector('body').classList.add('loaded');
    document.querySelector('header').classList.add('loaded');
    document.querySelector('footer').classList.add('loaded');
    document.querySelector('main').classList.add('loaded');
    setTimeout(function() {
    	document.querySelector('.loader-container').style.display = 'none';
    }, 1000);
    }, 300);
});

//


let scroll = window.requestAnimationFrame ||
    function(callback) {window.setTimeout(callback, 1000/60)};

var elementsToShow = document.querySelectorAll(".image-scroll");
var timelineToShow = document.querySelectorAll(".content");

const domainsSection = document.getElementById("me"); 
const projectSection = document.getElementById("projects");
const timelineSection = document.getElementById("timeline");

const domainsNav = document.getElementById("me-bottom-nav-a");
const projectNav = document.getElementById("projects-bottom-nav-a");
const timelineNav = document.getElementById("timeline-bottom-nav-a");

function loop() {
  /* LE PREMIER FAIT QUE LES 3 S ACTIVE (a reparer) */
  /* c logique sur pc mais sur tel ils seront séparés en 3 verticalement donc seront pas sur la viewport au meme moment */
  if (isElementInViewport(document.getElementsByClassName("zoom-container-div")[0])) {
    Array.from(document.getElementsByClassName("zoom-div")).forEach(function (e) {
      e.style.transform = "scale(0.8)";
    })    
  }

  domainsNav.classList.remove("current");
  projectNav.classList.remove("current");
  timelineNav.classList.remove("current");

  if (isElementInViewport(domainsSection)) {
    domainsNav.classList.add("current");
  }

  if (isElementInViewport(projectSection)) {
    projectNav.classList.add("current");
  }

  if (isElementInViewport(timelineSection)) {
    timelineNav.classList.add("current");
  }
  
  if (isElementInViewport2(document.getElementById("frise"))) {    
      document.getElementById("logo-floating").style.display = "block";
  } else {
      document.getElementById("logo-floating").style.display = "none";
  }
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.remove("image-scroll-invisible");
      element.classList.add("image-scroll-visible");
    } else {
      element.classList.remove("image-scroll-visible");
      element.classList.add("image-scroll-invisible");
    }
  });
  timelineToShow.forEach(function (element) {
	    if (isElementInViewport(element)) {
	    	element.classList.remove("timeline-invisible");
	    	element.classList.add("timeline-visible");
	    } else {
	      element.classList.remove("timeline-visible");
	      element.classList.add("timeline-invisible");
	    }
	  });
  scroll(loop);
}

loop();


function isElementInViewport(el) {
  let rect = el.getBoundingClientRect();
    let elementHeight = rect.bottom - rect.top;
    let offset = elementHeight - 100;
    return (
        rect.bottom-offset <= (window.innerHeight) &&
        rect.top+offset >=0
    );
}

/* pour le truc qui se déplace sur la frise */
function isElementInViewport2(el) {
  let rect = el.getBoundingClientRect();
  let elementHeight = rect.bottom - rect.top;
  let offset = elementHeight - 400;
  return (
      rect.bottom-offset <= (window.innerHeight) &&
      rect.top+offset >=0
  );
}

/* pop-up random pour indiquer qu'on peut hover sur un langage */

let languages = document.getElementsByClassName("me-popup");

let n = 0;
let last = languages[0];

setInterval(function(){
 	last.classList.remove("open");
 	languages[n].classList.add("open");
  last = languages[n];
  n = (n + 1) % languages.length;
}, 2000);

/* top scroll button */

window.onscroll = function() {
  topButton.style.display = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? "block" : "none";
}

var topButton = document.getElementById("top_button")

window.addEventListener("scroll", function() {
	let topButton = document.getElementById("top_button")

	topButton.style.transform = "scale(0.5) translate(-100%, -100%);";
});

function topFunction() {
	document.body.scrollTop = 0
	document.documentElement.scrollTop = 0
}
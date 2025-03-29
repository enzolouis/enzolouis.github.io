window.addEventListener('load', function() {
  setTimeout(function() {
    document.querySelector('.loader-container').classList.add('loaded');
    document.querySelector('body').classList.add('loaded');
    document.querySelector('header').classList.add('loaded');
    document.querySelector('footer').classList.add('loaded');
    document.querySelector('main').classList.add('loaded');
    setTimeout(function() {
    	document.querySelector('.loader-container').style.display = 'none';
    }, 1500);
    }, 1000);
});



let invisible_nav = document.getElementById("invisible")

function incrementHeight(height) {
	invisible_nav.style.height = height + "vh";
}

function decrementHeight(height) {
	invisible_nav.style.height = height + "vh";
}



let nav = false;

function showHamburgerNavBar() {
	if (nav == false) {
		let a = 2
		for (let i = 0; i <= 120 ; i++) {
			a += 2
			setTimeout(incrementHeight, a, i)
		}
		invisible_nav.style.visibility = "visible";
	} else {
		invisible_nav.style.visibility = "hidden";
		let a = 2
		for (let i = 120; i >= 0 ; i--) {
			a += 2
			setTimeout(decrementHeight, a, i)
		}
	}
	
	nav = !nav;
}


//


let scroll = window.requestAnimationFrame ||
    function(callback) {window.setTimeout(callback, 1000/60)};

var elementsToShow = document.querySelectorAll(".image-scroll");
var timelineToShow = document.querySelectorAll(".content");


function loop() {
  
  /* LE PREMIER FAIT QUE LES 3 SACTIVE (a reparer) */
  /* c logique sur pc mais sur tel ils seront séparés en 3 verticalement donc seront pas sur la viewport au meme moment */
  if (isElementInViewport(document.getElementsByClassName("zoom-container-div")[0])) {
    Array.from(document.getElementsByClassName("zoom-div")).forEach(function (e) {
      e.style.transform = "scale(0.8)";
    })    
  }

  
  /*if (isElementInViewport(document.getElementsByClassName("two-sides")[0])) {
    Array.from(document.getElementsByClassName("profile-side")).forEach(function (e) {
      e.style.opacity = "1";
      e.style.opacity = "1";
    })
      
  }*/
  
  
  if (isElementInViewport2(document.getElementById("frise"))) {    
      document.getElementById("test").style.display = "block";
  } else {
      document.getElementById("test").style.display = "none";
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

//
/*
let absoluteBackground = document.getElementById("absoluteBackground")

function showMore(height) {
 	absoluteBackground.style.height = height + "vh";
  //console.log(absoluteBackground.style.height);
}

let isFinished = false;

function removeAbsBackground() {
		let a = 2
    //console.log(window.innerHeight)
		for (let i = 200; i >= 0 ; i--) {
			a += 5;
			setTimeout(showMore, a, i)
		}
}
*/


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

window.onscroll = function() {scrollFunction()}

var topButton = document.getElementById("top_button")


window.addEventListener("scroll", function() {
	let topButton = document.getElementById("top_button")

	topButton.style.transform = "scale(0.5) translate(-100%, -100%);";
});

function topFunction() {
	document.body.scrollTop = 0
	document.documentElement.scrollTop = 0
}


function scrollFunction() {
	let navigation = document.getElementsByClassName("mediascreen")[0]

	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		topButton.style.display = "block";
    /*document.getElementById("visible").children[0].style.fontSize = "13px";
    Array.from(document.getElementById("nav").children[0].children).forEach((item, index)=>{
      item.style.paddingBottom = "1vh";
      item.style.paddingTop = "1vh";
    })*/
	} else {
		topButton.style.display = "none";
    /*Array.from(document.getElementById("nav").children[0].children).forEach((item, index)=>{
      item.style.paddingBottom = "3vh";
      item.style.paddingTop = "3vh";
    })
    document.getElementById("visible").children[0].style.fontSize = "16px";*/
	}
}

/* --- */
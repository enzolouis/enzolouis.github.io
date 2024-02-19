

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

//

let absoluteBackground = document.getElementById("absoluteBackground")

function showMore(height) {
 	absoluteBackground.style.height = height + "px";
  console.log(absoluteBackground.style.height);
}

let isFinished = false;

function removeAbsBackground() {
		let a = 2
		for (let i = window.innerHeight; i >= 0 ; i--) {
			a += 0.8;
			setTimeout(showMore, a, i)
		}
}
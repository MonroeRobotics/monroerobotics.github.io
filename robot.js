var drops = document.getElementsByClassName("robotHeader");

var changeDropState = function() {
    const robotCont = this.nextElementSibling;
    var state = robotCont.getAttribute("data-state");
    if(state == "hidden"){
        robotCont.classList.add('showDrop');
        robotCont.setAttribute("data-state", "shown");
    }
    else {
        robotCont.classList.remove('showDrop');
        robotCont.setAttribute("data-state", "hidden");
    }
}

for (var i = 0; i < drops.length; i++) {
    drops[i].addEventListener('click', changeDropState, false);
}

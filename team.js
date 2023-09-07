var cards = document.getElementsByClassName("teamMember");

var flipCard = function() {
    
    var side = this.getAttribute("data-card");
    var cardInnerElem = this.children[0]; 
    if(side == "front"){
        cardInnerElem.style.transform = "rotateY(180deg)";
        this.setAttribute("data-card", "back");
    }
    else {
        cardInnerElem.style.transform = "rotateY(0deg)";
        this.setAttribute("data-card", "front");
    }
}

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', flipCard, false);
}

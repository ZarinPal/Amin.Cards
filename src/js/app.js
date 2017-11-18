/**
 * Created by Amin Keshavarz on 10/13/2017.
 */

function toggleCardTop(card) {
    let topCard = document.querySelector(".card.on-top");
    let selectedCard = document.querySelector(card);
    let topCardImg = topCard.querySelector('svg');
    let selectedCardImg = selectedCard.querySelector('svg');

    let tempStyle = selectedCard.getAttribute('style');
    let tempImgStyle = selectedCardImg.getAttribute('style');

    selectedCard.setAttribute('style', topCard.getAttribute('style'));
    topCard.setAttribute('style', tempStyle);

    selectedCardImg.setAttribute('style', topCardImg.getAttribute('style'));
    topCardImg.setAttribute('style', tempImgStyle);

    topCard.classList.remove('on-top');
    selectedCard.classList.add('on-top');
}


/**
 * Cards animation codes
 */
let zIndexOfCards = 1000;
let cards = document.querySelectorAll("#properties .cards-container .card");
for (let index = 0; index < cards.length; index++) {
    cards[index].style.marginTop = 25 * index + 'px';
    cards[index].style.zIndex = zIndexOfCards--;

    cards[index].querySelector('svg').style.width = 100 - (index * 10) + "%";
}
/* End of card animations */

let movementStrength = 100;
let height = movementStrength / window.innerHeight;
let width = movementStrength / window.innerWidth;

function headerAnimations(event) {
    let pageX = event.clientX - (window).innerWidth / 2;
    let pageY = event.clientY - (window.innerHeight / 2);
    let newvalueX1 = width * pageX * -1 + 300;
    let newvalueY1 = height * pageY * -1 - 25;
    let newvalueX2 = width * pageX * +1 + 30;
    let newvalueY2 = height * pageY * +1 + 25;
    document.querySelector('header').setAttribute('style', "background-position:" + newvalueX1 + "px " + newvalueY1 + "px, " + newvalueX2 + "px " + newvalueY2 + "px, center");
}

/**
* Extra small size
*/

if(window.innerWidth <= 750){
    console.log("Mobile view");
    let slider = new CardSlider("#properties #card-details .item-small-slider");
}

/**
 * Card properties active and un active action.
 */
function activeCard(card) {
    document.querySelector("#properties li.active").classList.remove('active');
    card.classList.add('active');
    let id = card.getAttribute('id').split('-');
    id = id[1];
    toggleCardTop("#properties .cards-container .card#card-" + id);
}

/* End of card activation */


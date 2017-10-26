/**
 * Created by Amin Keshavarz on 10/13/2017.
 */
/**
 * Header background movement by mouse over.
 */
// let movementStrength = 40;
// let height = movementStrength / window.innerHeight;
// let width = movementStrength / window.innerWidth;
// let header = document.querySelector('header');
// document.addEventListener("mouseover", function(e){
//     if(e.pageY <= header.clientHeight){
//         let pageX = e.pageX - (window.innerWidth / 2);
//         let pageY = e.pageY - (window.innerHeight / 2);
//         let signX = pageX && pageX / Math.abs(pageX);
//         let signY = pageY && pageY / Math.abs(pageY);
//         let newvalueX1 = 300 + ((pageX) * -1 - movementStrength);
//         let newvalueY1 = -25 + ((pageY) * -1 + movementStrength);
//         let newvalueX2 = 30 + ((pageX) * -1 - movementStrength);
//         let newvalueY2 = 25 + ((pageY) * -1 + movementStrength);
//         header.style.backgroundPosition = ;
//     }
// });
jQuery(document).ready(function () {
    let movementStrength = 100;
    let height = movementStrength / jQuery(window).height();
    let width = movementStrength / jQuery(window).width();
    jQuery("header").mousemove(function (e) {
        console.log(e.pageX);
        let pageX = e.pageX - (jQuery(window).width() / 2);
        let pageY = e.pageY - (jQuery(window).height() / 2);
        let newvalueX1 = width * pageX * -1 + 300;
        let newvalueY1 = height * pageY * -1 - 25;
        let newvalueX2 = width * pageX * +1 + 30;
        let newvalueY2 = height * pageY * +1 + 25;
        jQuery('header').css("background-position", newvalueX1 + "px " + newvalueY1 + "px, " + newvalueX2 + "px " + newvalueY2 + "px, center");
    });
});
/* ./End header movement action. */

/**
 * Card properties active and un active action.
 */
let el = document.querySelectorAll('#properties li');
el.forEach(function (value, key) {
    value.onclick = function () {
        let elment = document.querySelectorAll('#properties li.active');
        elment.forEach(function (v) {
            v.classList.remove('active');
        });
        value.classList.add('active');
    };
});
/* End of card activation */
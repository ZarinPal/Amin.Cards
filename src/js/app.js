/**
 * Created by Amin Keshavarz on 10/13/2017.
 */

function toggleCardTop(card) {
    let topCard = jQuery(".card.on-top");
    let selectedCard = jQuery(card);
    let topCardImg = topCard.find('img');
    let selectedCardImg = selectedCard.find('img');

    let tempStyle = selectedCard.attr('style');
    let tempImgStyle = selectedCardImg.attr('style');

    selectedCard.attr('style', topCard.attr('style'));
    topCard.attr('style', tempStyle);

    selectedCardImg.attr('style', topCardImg.attr('style'));
    topCardImg.attr('style', tempImgStyle);

    topCard.removeClass('on-top');
    selectedCard.addClass('on-top');
}

jQuery(document).ready(function () {
    /**
     * Header background movement by mouse over.
     */
    let movementStrength = 100;
    let height = movementStrength / jQuery(window).height();
    let width = movementStrength / jQuery(window).width();
    jQuery("header").mousemove(function (e) {
        let pageX = e.pageX - (jQuery(window).width() / 2);
        let pageY = e.pageY - (jQuery(window).height() / 2);
        let newvalueX1 = width * pageX * -1 + 300;
        let newvalueY1 = height * pageY * -1 - 25;
        let newvalueX2 = width * pageX * +1 + 30;
        let newvalueY2 = height * pageY * +1 + 25;
        jQuery('header').css("background-position", newvalueX1 + "px " + newvalueY1 + "px, " + newvalueX2 + "px " + newvalueY2 + "px, center");
    });
    /* ./End header movement action. */


    /**
     * Card properties active and un active action.
     */
    jQuery("#properties li").click(function () {
        let element = jQuery(this);
        jQuery("#properties li.active").removeClass('active');
        element.addClass('active');
        let id = element.attr('id').split('-');
        id = id[1];
        toggleCardTop("#properties .cards-container .card#card-" + id);
    });
    /* End of card activation */

    /**
     * Cards animation codes
     */
    let zIndexOfCards = 1000;
    jQuery("#properties .cards-container .card").each(function (index, element) {
        let card = jQuery(element);
        card.css({
            'margin-top': 45 * index + 'px',
            'z-index': zIndexOfCards--,
        });
        card.find("img").css('width', 100 - (index * 10) + "%");
    });

    /* End of card animations */
});

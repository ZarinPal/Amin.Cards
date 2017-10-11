/**
 * Created by Amin Keshavarz on 7/31/2017.
 */
window.Bingo = {
    /**
     * Scroll page down to content
     */
    scrollToContent: function () {
        let timerID = setInterval(function () {
            window.scrollBy(0, 15);

            let sliderHeight = document.getElementById('container').clientHeight;
            if (window.pageYOffset >= sliderHeight || (sliderHeight + window.scrollY) >= document.body.offsetHeight)
                clearInterval(timerID);
        }, 13);
    },
    /**
     * Slider function
     * @param  slider  Slider dom element.
     */
    coverSlider: function (slider) {
        slider = document.querySelector(slider);
        if (!slider) {
            console.error("Slider selector is not valid.");
            return;
        }
        if (!slider)
            return;
        let delayTime = slider.dataset.delay;
        if (!delayTime)
            delayTime = 3000;
        let items = slider.querySelectorAll(".slider.img");
        let itemsSelector = document.querySelector(".slider-selector");
        let ul = document.createElement('ul');
        itemsSelector.appendChild(ul);
        let activeIndex = 0;
        for (let i = 0; i < items.length; i++) {
            items[i].setAttribute("style", "background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('" + items[i].dataset.img + "')");
            let li = document.createElement('li');
            li.setAttribute('data-num', (i + 1).toString());
            ul.appendChild(li);
            li.addEventListener("click", function (event) {
                let index = parseInt(event.target.dataset.num);
                activeIndex = index - 1;
                slider.querySelector(".slider.img.active").classList.remove('active');
                slider.querySelector(".slider:nth-child(" + index + ")").classList.add('active');
                // slider.querySelector(".slider-selector ul li:nth-child("+index+")").classList.add('active');
                // event.target.classList.add('active');
                slider.querySelector(".slider-selector ul li.active").classList.remove('active');
                event.target.classList.add('active');
            });
        }
        itemsSelector = document.querySelectorAll(".slider-selector ul li");
        items[0].className += ' active';
        itemsSelector[0].className += ' active';
        let timerID = setInterval(function () {
            items[activeIndex].classList.remove('active');
            itemsSelector[activeIndex].classList.remove('active');
            if (++activeIndex == items.length)
                activeIndex = 0;
            items[activeIndex].className += ' active';
            itemsSelector[activeIndex].className += ' active';
        }, delayTime);
    }
};

let sliderScrollBtn = document.getElementById("scroll-to-content");
if (sliderScrollBtn) {
    sliderScrollBtn.addEventListener("click", function () {
        Bingo.scrollToContent();
    });
}

let relatedContents = document.querySelector(".related-contents .content");
if (relatedContents) {
    let imgContainer = document.querySelectorAll(".related-contents .content .img, .related-contents .content .img img");
    let height = document.querySelector(".related-contents .col").offsetHeight + 'px';
    for (let i = 0; i < imgContainer.length; i++) {
        imgContainer[i].setAttribute("style", "height: " + height);
        console.log(imgContainer[i]);
    }
}
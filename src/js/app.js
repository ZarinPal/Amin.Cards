/**
 * Created by Amin Keshavarz on 10/13/2017.
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
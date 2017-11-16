let CardSlider = function (selector) {
    this.container = document.querySelectorAll(selector);

    for (let i=0; i<this.container.length; i++){
        let ul = this.container[0].querySelector('ul');

        let container = this.container[i];
        container.classList += ' card-slider';
        let width = container.offsetWidth;
        let totalWidth = 0;

        let lis = ul.querySelectorAll("li");
        for (let item of lis) {
            totalWidth += (width);
            item.style.width = (width-50)+'px';
            item.style.marginRight = '25px';
            item.style.marginLeft = '25px';
        }

        ul.style.width = totalWidth+'px';
        ul.style.right = 0;
        ul.style.position = 'relative';

        container.insertBefore(createNavigator(), container.nextSibling);



        function createNavigator() {
            let node = document.createElement('div');
            node.className = 'slider-navigator';

            let next= document.createElement('div');
            next.className = 'next-btn';
            next.onclick = function () {
                let r = ul.style.right;
                r.replace('px', '');
                r = parseFloat(r);
                if(-r < (totalWidth-width))
                    ul.style.right = (r-width).toString()+'px';
                console.log(r-width);
            };
            next.innerHTML = "<i class='fa fa-chevron-left'></i>";

            let pre= document.createElement('div');
            pre.className = 'pre-btn';
            pre.onclick = function () {
                let r = ul.style.right;
                r.replace('px', '');
                r = parseFloat(r);
                if(r != 0 )
                    ul.style.right = (r+width).toString()+'px';
                console.log(r+width);
            };
            pre.innerHTML="<i class='fa fa-chevron-right'></i>";

            node.appendChild(next);
            node.appendChild(pre);

            return node;
        }
    }
};
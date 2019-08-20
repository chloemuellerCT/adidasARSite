


const Main = (() => {

    let SH = window.innerHeight;
    let SW = window.innerWidth;

    const _init = () => {
        'use strict';
        initWindowEvents();

/*        var $slider = document.getElementById('shoe-col');
        var $shoe = document.getElementById('shoeMarker');
        var $book = document.getElementsByClassName('col-md-4')[2];
        var $web = document.getElementsByClassName('col-md-4')[1];


        $slider.addEventListener('click', function() {
          var isOpen = $slider.classList.contains('slide-in');
          if(isOpen){
            $slider.classList.replace('slide-in', 'slide-out');
            $book.style.display= "none";
            $web.style.display= "none";
          }


          //$shoe.setAttribute('id', isOpen ? 'shoeMarker-slideout' : 'shoeMarker');
        }); */


    };





    const initWindowEvents = () => {
        window.addEventListener( 'resize', onWindowResize, false );
    }

    const onWindowResize = () => {

    };

    return {
        init: _init,
    }
})();


document.addEventListener('DOMContentLoaded', Main.init);


$(document).ready(function(){
    const menuLink = document.querySelectorAll('.header__link[data-goto]');

    if(menuLink.length > 0){
        menuLink.forEach(menuLink => {
            menuLink.addEventListener('click', onMenuLinkClick)
            
        })
        function onMenuLinkClick(e){
            const menuLink = e.target;
            if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
                const headerMenu = document.querySelector('.header__menu');
                const headerBurger = document.querySelector('.header__burger');
                const body = document.body

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior:"smooth"
                });
                e.preventDefault();
                headerBurger.classList.remove('active');
                headerMenu.classList.remove('active');
                body.classList.remove('lock');
            }
        }
    }

    AOS.init();

    let header = document.querySelector('header');

    window.addEventListener('scroll', function(){
        if(header){
            if(window.pageYOffset >= 100){
                header.classList.add('_scroll');
            } else{
                header.classList.remove('_scroll');
            }
        }
    });
});


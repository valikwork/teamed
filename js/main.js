'use strict';

const tabBtns = document.querySelectorAll('.solution__btn');
const tabs =  document.querySelectorAll('.solution__tabs-content');

document.querySelector('.solution__tabs-wrap').addEventListener('click', function(event) {
    let el = event.target;
    if(el.classList.contains('solution__btn')) {
        let tar = el.dataset.target;
        tabs.forEach(function(tab) {
            tab.classList.add('hide');
            if (tab.id === tar) {
                tab.classList.remove('hide');
            };
        });
        
        tabBtns.forEach(function(btn) {
            btn.classList.remove('active');
        })
        el.classList.add('active');
    };
});

$('.main-slider__wrap').slick({
    infinite: true,
    prevArrow: $('.main-slider__prev'),
    nextArrow: $('.main-slider__next')
  });

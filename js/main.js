'use strict';

var tabBtns = document.querySelectorAll('.solution__btn');
var tabs =  document.querySelectorAll('.solution__tabs-content');

$('.main-slider__wrap').slick({
    infinite: true,
    prevArrow: $('.main-slider__prev'),
    nextArrow: $('.main-slider__next')
});
$('.services-slick').slick({
    infinite: true,
    prevArrow: $('.main-slider__prev'),
    nextArrow: $('.main-slider__next')
});

var tabWrap = document.querySelector('.solution__tabs-wrap');

if(tabWrap) {
    tabWrap.addEventListener('click', function(event) {
        var el = event.target;
        
        if(el.classList.contains('solution__btn')) {
            var tar = el.dataset.target;
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
};

var accordionBodies = $('.expert-accordion__item-body').hide();
var accordionHeads = $('.expert-accordion__item-head');
var btns = $('.acc-btn');

btns.html('<i class="fas fa-plus"></i>');

$('.acc-btn').on('click', function() {

    var thisBody = $(this).parent().next();
    var thisHead = $(this).parent();
    
    if(thisHead.hasClass('open')) {
        thisHead.removeClass('open');
        btns.html('<i class="fas fa-plus"></i>');
        thisBody.slideUp();
    } else {
        btns.html('<i class="fas fa-plus"></i>');
        accordionBodies.slideUp();
        accordionHeads.removeClass('open');
        
        thisBody.slideDown();
        thisHead.addClass('open');
        $(this).html('<i class="fas fa-minus"></i>');
    };
});


var expertTabs = document.querySelectorAll('.experts-tabs__card');
var expertsTabBtns = document.querySelectorAll('.experts-tabs__btn');
var tabExpertsWrap = document.querySelector('.experts-tabs__wrap');

if(tabExpertsWrap) {
    tabExpertsWrap.addEventListener('click', function(event) {
        var el = event.target;
    
        if(el.classList.contains('experts-tabs__btn')) {
            var tar = el.dataset.target;
            expertTabs.forEach(function(tab) {
                tab.classList.add('hide');
                if (tab.id === tar) {
                    tab.classList.remove('hide');
                };
            });
            
            expertsTabBtns.forEach(function(btn) {
                btn.classList.remove('active');
            });
            el.classList.add('active');
        };
    });
};


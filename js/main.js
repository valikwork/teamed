'use strict';

const tabBtns = document.querySelectorAll('.solution__btn');

document.querySelector('.solution__tabs-wrap').addEventListener('click', function(event) {
    let el = event.target;

    if(el.classList.contains('solution__btn')) {
        let tar = el.dataset.target;

        document.querySelectorAll('.solution__tabs-content').forEach(function(tab) {
            tab.setAttribute('style', 'display: none');
            
            if (tab.id === tar) {
                tab.setAttribute('style', 'display: flex');
            };

        });
        
        tabBtns.forEach(function(btn) {
            btn.classList.remove('active');
        })
        el.classList.add('active');
    };
})

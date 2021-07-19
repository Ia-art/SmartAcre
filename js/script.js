const menuBtn = document.querySelector('#menu-btn');
const openNav = document.querySelector('.nav-list');


menuBtn.addEventListener('click', ()=> {
    
    if (menuBtn.classList.contains('open')) { // close menu icon
        menuBtn.classList.remove('open');
        $(openNav).hide('300ms');
    } else {                                   // open menu icon
        menuBtn.classList.add('open');
        $(openNav).show('300ms');
        
    }
    
});
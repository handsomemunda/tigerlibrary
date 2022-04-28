// by this search buttons and navbar will arrive on clicking bars 
let menu = document.querySelector('#menu-btn');
let nabar = document.querySelector('.header .navbar');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
   nabar.classList.toggle('active');
};
// by this the theme  moon will change to sun 
let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
   nabar.classList.remove('active');

//    THIS WILL MAKE OUR UPPER SCROLLBAR MOVE 

let maxHeight = window.document.body.scrollHeight - window.innerHeight; 
let percentage = ((window.scrollY) / maxHeight) * 100;
document.querySelector('.header .scroll-indicator').style.width = percentage + '%';
};

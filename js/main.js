$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        center: true,
        nav: true,
        touchDrag: true,
    });

});



let sub_menu = document.querySelector('.sub__menu-block');
let nav_items = document.querySelectorAll('li.nav__item');



for (let i = 0; i < nav_items.length;i++){
    let isSub = nav_items[i].querySelectorAll('div.sub__menu-block');
    //alert()
    if (isSub.length != 0) {
        if (!nav_items[i].classList.contains('categories__item')) {
            nav_items[i].classList.add('categories__item'); 
        }
    }
}


let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}

let burger = document.querySelector('.burger');
let mobMenu_Wrap = document.querySelector('.header__wrapper');

burger.addEventListener('click', mobMenu);

function mobMenu(){
    burger.classList.toggle('active');
    

    if (burger.classList.contains('active')) {
        mobMenu_Wrap.style.top = 0 + 'vh';
        mobMenu_Wrap.style.opacity = 1;
    } else {
                mobMenu_Wrap.style.top = -100 + 'vh';
        mobMenu_Wrap.style.opacity = 0;
       }
}

let like = document.querySelectorAll('.icon-like');


for (i = 0; i < like.length; i++){

    let newLike = like[i];
    newLike.addEventListener('click', addLike)
    function addLike() {
    newLike.classList.toggle('active');
}
}


let iconAdd = document.querySelectorAll('.icon-add');

for (i = 0; i < iconAdd.length; i++){

    let newAdd = iconAdd[i];
    newAdd.addEventListener('click', add)
    function add() {
    newAdd.classList.toggle('active');
}
}
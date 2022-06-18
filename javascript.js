// PRODUCT CARD 
$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        601:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[3000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


// DROP MENU SIDEBAR
const dropMenu = document.querySelectorAll('.dropdown__menu');
const dropBtn = document.querySelectorAll('.dropdown__btn');

dropBtn.forEach(function(btn, i) {
    dropBtn[i].addEventListener('click', () => {
        dropMenu[i].classList.toggle('active')
    })
})


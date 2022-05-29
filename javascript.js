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


// function onHover()
//     {
//         $("#product__card-img").attr('src', './assets/img/product/new_arrival/1.2.webp');
//     }

// function offHover()
//     {
//         $("#product__card-img").attr('src', './assets/img/product/new_arrival/bt1.webp');

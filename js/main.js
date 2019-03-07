$(document).ready(function () {
      
    // EASE SCROLL

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });
    
    
    //ANIMATION 
    
    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var position = $(this).offset().top;
            var animation = $(this).attr('data-animation');
            //var delay = $(this).attr('data-delay');
            if (position < scroll + windowHight - 60) {
                $(this).addClass(animation);
                //$(this).css('animation-delay', delay);
            }
        });
    }//end of animation function

    animation();

    $(window).scroll(function () {
        animation();
    });
    
    
    
   if($('.owl-carousel').length > 0){
       $('.product-slider').owlCarousel({
           
       });
       
       
        $('.product-slider-newest').owlCarousel({
           
       });
       
       $('.product-slider-recommend').owlCarousel({
           
       });
       
       $('.icons-slider').owlCarousel({
           margin:10,
           dots:false,
           autoplay:true,
           loop:true,
           responsive:{
               0:{
                   items:2,
                   slideBy:2
               },
                400:{
                   items:3,
                   slideBy:3
               },
                576:{
                   items:4,
                   slideBy:4
               },
                768:{
                   items:6,
                   slideBy:6
               },
                992:{
                   items:9,
                   slideBy:9
               },
                1200:{
                   items:12,
                   slideBy:12
               }
           }
       });
       
       $('.lead-slider').owlCarousel({
           items:1
       });
       
       $('.for-all-slider').owlCarousel({
           
       });
       
       $('.categories-slider').owlCarousel({
           
       });
   }

});//end document.ready



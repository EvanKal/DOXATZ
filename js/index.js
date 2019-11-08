window.addEventListener('DOMContentLoaded', () => {
    console.log("here");
    document.querySelector('nav .navbar-toggler').addEventListener('click', ()=> {
        document.querySelector("#navbarResponsive").classList.toggle("slidein");
    });
});


let carouselItems = $('#iconCarousel .carousel-item');
console.log(carouselItems);

carouselItems.each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  
    for (var i=0;i<4;i++) {
      next=next.next();
      if (!next.length) {
        next=$(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
    }
  });

//   $('#iconCarousel').carousel({
//     interval: 10000
//   })
  
//   $('#iconCarousel .carousel-item').each(function(){
//     var next = $(this).next();
//     if (!next.length) {
//       next = $(this).siblings(':first');
//     }
//     next.children(':first-child').clone().appendTo($(this));
    
//     if (next.next().length>0) {
//       next.next().children(':first-child').clone().appendTo($(this));
//     }
//     else {
//         $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
//     }
//   });
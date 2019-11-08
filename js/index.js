window.addEventListener('DOMContentLoaded', () => {

  document.querySelector('nav .navbar-toggler').addEventListener('click', () => {
    document.querySelector("#navbarResponsive").classList.toggle("slidein");
  });

  initiateIconCarousel();
});

function initiateIconCarousel() {
  let carouselItems = $('#iconCarousel .carousel-item');
  let iconCarouselControls = document.querySelector("#iconCarousel .controls-top");
  console.log(iconCarouselControls);

  if (carouselItems.length <= 6) {

    let carouselInner = document.querySelector("#iconCarousel .carousel-inner");
    iconCarouselControls.classList.add("d-none");
    $('#iconCarousel').carousel({
      interval: false
    });
    carouselInner.classList.add("d-flex", "justify-content-between");
    carouselInner.querySelectorAll(".carousel-item").forEach((elem)=>{
      elem.classList.add("d-block");
    });
  } else {
    setIconCarouselSliding(carouselItems);
  }

}

function setIconCarouselSliding(carouselItems) {

  carouselItems.each(function () {
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < 4; i++) {
      next = next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
    }
  });
}


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
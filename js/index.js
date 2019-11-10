window.addEventListener('DOMContentLoaded', () => {

  document.querySelector('nav .navbar-toggler').addEventListener('click', () => {
    document.querySelector("#navbarResponsive").classList.toggle("slidein");
  });



  initiateIconCarousel();
  modifyCarouselsToSingleSlideCarousel();
  checkIfCardDescriptionOverflows();

  $('.carousel').carousel({
    touch: true,
    interval: 2000
  });

  $(document).ready(function () {

    $('.mySlickCarousel.small-coupon-carousel').slick({
      infinite: true,
      prevArrow: $(".mySlickCarousel.small-coupon-carousel").siblings(".slick-controls").find(".prev-arrow"),
      nextArrow: $(".mySlickCarousel.small-coupon-carousel").siblings(".slick-controls").find(".next-arrow"),
      appendArrows: $(".mySlickCarousel.small-coupon-carousel").siblings(".slick-controls"),
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            // infinite: true,
            // dots: true
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            // infinite: true,
            // dots: true
          }
        },
        {
          breakpoint: 890,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 590,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    

    $('.mySlickCarousel.large-coupon-carousel').slick({
      infinite: true,
      prevArrow: $(".mySlickCarousel.large-coupon-carousel").siblings(".slick-controls").find(".prev-arrow"),
      nextArrow: $(".mySlickCarousel.large-coupon-carousel").siblings(".slick-controls").find(".next-arrow"),
      appendArrows: $(".mySlickCarousel.large-coupon-carousel").siblings(".slick-controls"),
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1330,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            // infinite: true,
            // dots: true
          }
        },
        {
          breakpoint: 910,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });


  });

});

window.addEventListener('resize', () => {
  appendProperClassForSlidingSync();
});



function appendProperClassForSlidingSync() {
  let carousels = document.querySelectorAll('.singleItemSlideCarousel');

  carousels.forEach((elem) => {
    let firstitem = elem.querySelector(".carousel-item").querySelector(".carousel-item > div");

    let flexbasis = window.getComputedStyle(firstitem).getPropertyValue("flex-basis");
    console.log(flexbasis);

    switch (flexbasis) {
      case '100%':
        elem.querySelectorAll(".carousel-item").forEach((elem) => {
          elem.classList.remove("oneItem", "twoItem", "threeItem", "fourItem", "sixItem")
          elem.classList.add("oneItem");
        })
        break;
      case '50%':
        elem.querySelectorAll(".carousel-item").forEach((elem) => {
          elem.classList.remove("oneItem", "twoItem", "threeItem", "fourItem", "sixItem")
          elem.classList.add("twoItem");
        })
        break;
      case '33.3333%':
        elem.querySelectorAll(".carousel-item").forEach((elem) => {
          elem.classList.remove("oneItem", "twoItem", "threeItem", "fourItem", "sixItem")
          elem.classList.add("threeItem");
        })
        break;
      case '25%':
        elem.querySelectorAll(".carousel-item").forEach((elem) => {
          elem.classList.remove("oneItem", "twoItem", "threeItem", "fourItem", "sixItem")
          elem.classList.add("fourItem");
        })
        break;
      case '16.6667%':
        elem.querySelectorAll(".carousel-item").forEach((elem) => {
          elem.classList.remove("oneItem", "twoItem", "threeItem", "fourItem", "sixItem")
          elem.classList.add("sixItem");
        })
        break;
    }
  });
}

function modifyCarouselsToSingleSlideCarousel() {
  appendProperClassForSlidingSync();

  $(".singleItemSlideCarousel").each(function () {

    let carouselItems = $(this).find(".carousel-item");

    carouselItems.each(function () {
      console.log("hi");
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

  });
}


function setCarouselToSingleSlide(carousel) {

  let carouselItems = $(carousel).find(".carousel-item");

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




// Icon carousel

function initiateIconCarousel() {
  let carouselItems = $('#iconCarousel .carousel-item');

  if (carouselItems.length <= 6) {
    nonSlidingCarousel();
  } else {
    setCarouselToSingleSlide();
  }

}

function nonSlidingCarousel() {
  let carouselItems = $('#iconCarousel .carousel-item');

  // Hide controls and stop the carousel
  let iconCarouselControls = document.querySelector("#iconCarousel .controls-top");

  iconCarouselControls.classList.add("d-none");
  $('#iconCarousel').carousel({
    interval: false
  });

  //Fix display
  let carouselInner = document.querySelector("#iconCarousel .carousel-inner");

  carouselInner.classList.add("d-flex", "justify-content-between", "flex-wrap");
  carouselItems.each(function () {
    $(this).addClass("d-block");
    $(this).addClass("item");
    $(this).removeClass("carousel-item");
  });
}

//Cards

//Check if card description is overflowing

function checkIfCardDescriptionOverflows() {
  let blockswithtext = $('.card p');

  blockswithtext.each(function(){
    let elem = $(this);
    console.log(elem.parent().innerHeight());
    console.log(elem.prop("scrollHeight"));

    if(elem.parent().innerHeight() < elem.innerHeight()) {
      elem.addClass("block-with-text");
    }
  });
}
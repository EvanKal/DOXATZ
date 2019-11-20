window.addEventListener('DOMContentLoaded', () => {

  document.querySelector('nav .navbar-toggler').addEventListener('click', () => {
    document.querySelector("#navbarResponsive").classList.toggle("slidein");
    document.querySelector(".navbar-toggler").classList.toggle("navbar-toggler-slidein");
  });



  initiateIconCarousel();
  modifyCarouselsToSingleSlideCarousel();
  checkIfCardDescriptionOverflows();
  fillStarsInCards(3);
  setUpSlickCarouselDisplayOptions();
  assignRipleToAllBtn();
  toggleLogIn();
  toggleuserDropdownMenuButtonArrow();

  $('.carousel').carousel({
    touch: true,
    interval: 2000
  });



});

window.addEventListener('resize', () => {
  appendProperClassForSlidingSync();
});

//NavBar event Handlers

window.addEventListener('click', (event) => {
  menuLinkClickHandler(event);
});

function menuLinkClickHandler(event) {
  console.log(event.target);
  if (event.target.classList.contains("navmenulink")) {
    collapseAllLinks(event.target.parentElement.querySelector("div i"));
    event.target.parentElement.querySelector("div i").classList.toggle("menulinkiconrotate");
  }
}

function collapseAllLinks(clicked) {
  document.querySelectorAll("#navbarResponsive .navmenulink div i").forEach((elem) => {
    if (elem != clicked) {
      elem.classList.remove("menulinkiconrotate");
    }
  });
}

//Assign ripple on click to all the elements with btn class

function assignRipleToAllBtn() {
  document.querySelectorAll(".btn").forEach((elem) => {
    elem.setAttribute("anim", "ripple");
  });

  [].map.call(document.querySelectorAll('[anim="ripple"]'), function (el) {
    el.addEventListener('click', function (e) {
      e = e.touches ? e.touches[0] : e;
      var r = el.getBoundingClientRect(), d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
      el.style.cssText = "--s: 0; --o: 1;";
      el.offsetTop;
      el.style.cssText = "--t: 1; --o: 0; --d: " + d + "; --x:" + (e.clientX - r.left) + "; --y:" + (e.clientY - r.top) + ";";
    });
  });
}


// mySlickCarousel set up

function initializeCarousels() {
  $('.mySlickCarousel.small-coupon-carousel').slick({
    infinite: true,
    prevArrow: $(".mySlickCarousel.small-coupon-carousel").siblings(".slick-controls").find(".prev-arrow"),
    nextArrow: $(".mySlickCarousel.small-coupon-carousel").siblings(".slick-controls").find(".next-arrow"),
    appendArrows: $(".mySlickCarousel.small-coupon-carousel").siblings(".slick-controls"),
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
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
          slidesToScroll: 1
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
}



function setUpSlickCarouselDisplayOptions() {
  initializeCarousels();

  let optionsByMaxNumberOfSlidesToBeDisplayed = {

    largecouponcarousel: {

      threeslides: {
        value: 3,
        options: {
          slidesToShow: 3,
          arrows: false,
          autoplay: false,
          infinite: false,
          responsive: [
            {
              breakpoint: 1330,
              settings: {
                arrows: true,
                autoplay: true,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1
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
        }
      },

      twoslides: {
        value: 2,
        options: {
          arrows: false,
          autoplay: false,
          infinite: false,
          slidesToShow: 2,
          responsive: [
            {
              breakpoint: 910,
              settings: {
                arrows: true,
                autoplay: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        }
      },

      oneslide: {
        value: 1,
        options: {
          arrows: false,
          autoplay: false,
          infinite: false,
          slidesToShow: 1,
          responsive: []
        }
      }
    },

    smallcouponcarousel: {
      fourslides: {
        value: 4,
        options: {
          slidesToShow: 4,
          arrows: false,
          autoplay: false,
          infinite: false,
          responsive: [
            {
              breakpoint: 1400,
              settings: {
                arrows: true,
                autoplay: true,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
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
          ]
        }
      },

      threeslides: {
        value: 3,
        options: {
          arrows: false,
          autoplay: false,
          infinite: false,
          slidesToShow: 3,
          responsive: [
            {
              breakpoint: 890,
              settings: {
                arrows: true,
                autoplay: true,
                infinite: true,
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
          ]
        }
      },

      twoslides: {
        value: 2,
        options: {
          arrows: false,
          autoplay: false,
          infinite: false,
          slidesToShow: 2,
          responsive: [
            {
              breakpoint: 590,
              settings: {
                arrows: true,
                autoplay: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        }
      },

      oneslide: {
        value: 1,
        options: {
          arrows: false,
          autoplay: false,
          infinite: false,
          slidesToShow: 1,
          responsive: []
        }
      }
    }


  }

  let carousels = document.querySelectorAll(".mySlickCarousel");

  carousels.forEach((carousel) => {

    // let slickitemsnum = carousel.querySelectorAll(".slick-carousel-item").length;
    // console.log(slickitemsnum);
    // console.log(carousel);

    if (carousel.classList.contains("large-coupon-carousel")) {
      console.log("large");
      assignOptionsToCarousel(carousel, optionsByMaxNumberOfSlidesToBeDisplayed.largecouponcarousel);
    }

    if (carousel.classList.contains("small-coupon-carousel")) {
      console.log("small");
      assignOptionsToCarousel(carousel, optionsByMaxNumberOfSlidesToBeDisplayed.smallcouponcarousel);
    }

  });


}

function assignOptionsToCarousel(carousel, options) {

  let slickitemsnum = carousel.querySelectorAll(".slick-carousel-item").length;
  for (let [objkey, objvalue] of Object.entries(options)) {

    // console.log(`key ${objkey}: value ${objvalue} AND ${options[objkey]}`);


    if (options[objkey].value == slickitemsnum) {


      let optionsforthiscarousel = options[objkey].options;
      for (let [key, value] of Object.entries(optionsforthiscarousel)) {

        console.log(key, ":", optionsforthiscarousel[key]);


        $(carousel).slick('slickSetOption', key, optionsforthiscarousel[value], false);
      }

    }



  }



}





// Single Slide Bootstrap Carousel Set up

function appendProperClassForSlidingSync() {
  let carousels = document.querySelectorAll('.singleItemSlideCarousel');

  carousels.forEach((elem) => {
    let firstitem = elem.querySelector(".carousel-item > div");

    let flexbasis = window.getComputedStyle(firstitem).getPropertyValue("flex-basis");

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
  let blockswithtextinlargecoupons = $('.mySlickCarousel.large-coupon-carousel .card-middle-description p');

  blockswithtextinlargecoupons.each(function () {
    let elem = $(this);
    console.log(elem.parent().innerHeight());
    console.log(elem.prop("scrollHeight"));

    if ((elem.parent().innerHeight() < elem.innerHeight())) {
      elem.addClass("block-with-text");
      elem.addClass("twoline");
    }
  });

  let blockswithtextinsmallcoupons = $('.mySlickCarousel.small-coupon-carousel .card-middle-description p');
  blockswithtextinsmallcoupons.each(function () {
    let elem = $(this);
    console.log(elem.parent().innerHeight());
    console.log(elem.prop("scrollHeight"));

    if (elem.parent().innerHeight() < elem.innerHeight()) {
      console.log("In here");
      elem.addClass("block-with-text");
      elem.addClass("threeline");
    }
  });
}

//Fill star rating display

function fillStarsInCards(rating) {

  //Temporary method to fill all the rating displays with stars based on a variable

  let allcards = document.querySelectorAll(".card .rating-display");

  allcards.forEach((elem) => {

    //The actual method body to be used later

    let fragment = document.createDocumentFragment();

    for (i = 1; i <= 5; i++) {
      let star = document.createElement("span");

      if (i <= rating) {
        star.setAttribute("class", "fa fa-star pr-1");
      } else {
        star.setAttribute("class", "fa fa-star-o pr-1");
      }

      fragment.appendChild(star);
    }

    elem.appendChild(fragment);

  });
}

function toggleLogIn() {
  document.querySelectorAll('.loginbtn').forEach((elem) => {
    elem.addEventListener('click', () => {
      document.querySelectorAll('.signedout').forEach((elem) => { elem.classList.toggle("d-none") });
      document.querySelectorAll('.signedin').forEach((elem) => { elem.classList.toggle("d-none") });
    });
  });
}

function toggleuserDropdownMenuButtonArrow() {
  $("#userDropdownMenu").on('hide.bs.dropdown', function (event) {
    if($('#userDropdownMenuButton .iconcontainer i').hasClass("menulinkiconrotate")) {
      $('#userDropdownMenuButton .iconcontainer i').removeClass("menulinkiconrotate");
    }
  });
  $("#userDropdownMenu").on('show.bs.dropdown', function (event) {
    if(!$('#userDropdownMenuButton .iconcontainer i').hasClass("menulinkiconrotate")) {
      $('#userDropdownMenuButton .iconcontainer i').addClass("menulinkiconrotate");
    }
  });
}
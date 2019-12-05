
window.addEventListener('DOMContentLoaded', () => {

    fillStarsInPartnerRating(3);
    changeClassInParterSmallCouponCarousel();

});


// This is used to detect when window resizing has ended so that the function 
//that determines the behaviour of the partner carousel is not being constantly called
let resizeTimer;

window.addEventListener('resize', () => {

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
        console.log("resizeended");
        changeClassInParterSmallCouponCarousel();
    }, 250);

});




function fillStarsInPartnerRating(rating) {

    //Temporary method to fill all the rating displays with stars based on a variable

    let allcards = document.querySelectorAll(".partner-rating .rating-display");

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

function changeClassInParterSmallCouponCarousel() {


    //This method changes the class that defines the type of the small coupon carousel
    // so that it behaves correctly when it changes from full width to smaller and vice versa
    let carousel = document.querySelector(".partner-offers-carousel .mySlickCarousel.small-coupon-carousel");
    let carouseltype;

    if (carousel.classList.contains("full-width-small-coupon-carousel")) {
        carouseltype = "full-width-small-coupon-carousel";
    } else if (carousel.classList.contains("partner-details-small-coupon-carousel")) {
        carouseltype = "partner-details-small-coupon-carousel";
    }

    // console.log(carouseltype);

    if (window.innerWidth >= 768) {
        carousel.classList.add("partner-details-small-coupon-carousel");
        carousel.classList.remove("full-width-small-coupon-carousel");

    } else {
        carousel.classList.add("full-width-small-coupon-carousel");
        carousel.classList.remove("partner-details-small-coupon-carousel");
    }


    //Check if carousel has been initialized before re-initialization and if it's type has changed

    if (carousel.classList.contains("slick-initialized") && !carousel.classList.contains(carouseltype)) {
        console.log("re-slicking");
        try {
            $(carousel).slick("unslick");
        } catch (error) {
            console.log("Carousel not initialized yet");
        }
        initializeCarousels();
    }

}


window.addEventListener('DOMContentLoaded', () => {

    fillStarsInPartnerRating(3);
    changeClassInParterSmallCouponCarousel();

});

window.addEventListener('resize', () => {
    changeClassInParterSmallCouponCarousel()
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

    if(window.innerWidth >= 768) {
        carousel.classList.add("partner-details-small-coupon-carousel");
        carousel.classList.remove("full-width-small-coupon-carousel");

       try {
        $(carousel).slick("unslick");
       } catch (error) {
           console.log("Carousel not initialized yet");
       }
        

    } else {
        carousel.classList.add("full-width-small-coupon-carousel");
        carousel.classList.remove("partner-details-small-coupon-carousel");

        try {
            $(carousel).slick("unslick");
           } catch (error) {
            console.log("Carousel not initialized yet");
           }
    }

    initializeCarousels();

}
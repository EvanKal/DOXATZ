
window.addEventListener('DOMContentLoaded', () => {

    fillStarsInPartnerRating(3);

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
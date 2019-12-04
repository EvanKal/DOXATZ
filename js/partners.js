window.addEventListener('DOMContentLoaded', () => {

    toggleFilters();
    toggleSpinner();

    // checkIfCardDescriptionOverflowsInCouponListing();

});

function toggleFilters() {
    document.querySelector(".filters-toggle-button-container button").addEventListener("click", () => {
        console.log("clicked");
        document.querySelector(".filters-container").classList.toggle("slidein");
    });

    document.querySelector(".filters-container .close").addEventListener("click", () => {
        document.querySelector(".filters-container").classList.toggle("slidein");
    });
}


function toggleSpinner() {
    document.querySelector(".more-coupons-button ").addEventListener("click", (event) => {

        document.querySelector(".more-coupons-spinner-container").classList.toggle("d-flex");
        document.querySelector(".more-coupons-spinner-container").classList.toggle("d-none");

    });
}


// function checkIfCardDescriptionOverflowsInCouponListing() {
//     let blockswithtextinlargecoupons = $('.coupons-display-container .card-middle-description p');

//     blockswithtextinlargecoupons.each(function () {
//         let elem = $(this);

//         if ((elem.parent().innerHeight() < elem.innerHeight())) {
//             elem.addClass("block-with-text");
//             elem.addClass("twoline");
//         }
//     });

//     let blockswithtextinsmallcoupons = $('.coupons-display-container .card-middle-description p');
//     blockswithtextinsmallcoupons.each(function () {
//         let elem = $(this);
//         if (elem.parent().innerHeight() < elem.innerHeight()) {
//             elem.addClass("block-with-text");
//             elem.addClass("threeline");
//         }
//     });
// }
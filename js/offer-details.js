window.addEventListener('DOMContentLoaded', () => {

    toggleDropdownMenuArrow();
    checkIfCardDescriptionOverflowsInCouponListing();
    toggleCollapseOnListGroupItemClick();
    toggleActiveClassInListGroup();
    fillStarsInOfferRating(3);
    // couponBuyButtonAddListener();
    // couponDropdownToggle();
    // initiateDatepicker();
    firstExample();
    animateCouponsBadgeInTooltip();
});


function toggleDropdownMenuArrow() {
    $("#accordionDropdownMenuContainer").on('hide.bs.collapse', function (event) {
        if (event.target == this && $('#categoriesAccordionButton .iconcontainer i').hasClass("menulinkiconrotate")) {
            $('#categoriesAccordionButton .iconcontainer i').removeClass("menulinkiconrotate");
        }
    });


    $("#accordionDropdownMenuContainer").on('show.bs.collapse', function (event) {
        if (event.target == this && !$('#categoriesAccordionButton .iconcontainer i').hasClass("menulinkiconrotate")) {
            $('#categoriesAccordionButton .iconcontainer i').addClass("menulinkiconrotate");
        }
    });

    $("#offerReviewsAccordionDropdown").on('hide.bs.collapse', function (event) {
        if (event.target == this && $('#offerReviewsAccordionButton .iconcontainer i').hasClass("menulinkiconrotate")) {
            $('#offerReviewsAccordionButton .iconcontainer i').removeClass("menulinkiconrotate");
        }
    });

    $("#offerReviewsAccordionDropdown").on('show.bs.collapse', function (event) {
        // console.log($('#offerReviewsAccordionButton .iconcontainer i'));
        console.log(event.target);

        if (event.target == this && (!$('#offerReviewsAccordionButton .iconcontainer i').hasClass("menulinkiconrotate"))) {

            $('#offerReviewsAccordionButton .iconcontainer i').addClass("menulinkiconrotate");
        }
    });


}

function checkIfCardDescriptionOverflowsInCouponListing() {
    let blockswithtextinlargecoupons = $('.coupons-display-container .card-middle-description p');

    blockswithtextinlargecoupons.each(function () {
        let elem = $(this);

        if ((elem.parent().innerHeight() < elem.innerHeight())) {
            elem.addClass("block-with-text");
            elem.addClass("twoline");
        }
    });

    let blockswithtextinsmallcoupons = $('.coupons-display-container .card-middle-description p');
    blockswithtextinsmallcoupons.each(function () {
        let elem = $(this);
        if (elem.parent().innerHeight() < elem.innerHeight()) {
            elem.addClass("block-with-text");
            elem.addClass("threeline");
        }
    });
}


function toggleActiveClassInListGroup() {
    document.querySelector("#mobile-submenu").addEventListener("click", (event) => {

        if (event.target.classList.contains("list-group-item")) {

            //Active class in list group handling
            event.target.parentNode.querySelector("a.active").classList.remove("active");
            event.target.classList.add("active");

            //Category Sub-Category handling
            // let category = event.target.parentNode.previousSibling.querySelector("p").innerHTML;
            // let subcategory = event.target.innerHTML;
            // document.querySelector(".category-container h1").innerHTML = category;
            // document.querySelector(".category-container h2").innerHTML = subcategory;
            // document.querySelector(".category-container h1.slash").classList.remove("d-none");
        }


    });

    document.querySelector("#web-submenu").addEventListener("click", (event) => {

        if (event.target.classList.contains("list-group-item")) {

            //Active class in list group handling
            event.target.parentNode.querySelector(".active").classList.remove("active");
            event.target.classList.add("active");

        }


    });
}



function toggleCollapseOnListGroupItemClick() {

    //This method might be unnecessary if window reloads but ok if an ajax call is made after the click
    document.querySelector("#mobile-submenu").addEventListener("click", (event) => {

        if (event.target.classList.contains("list-group-item")) {
            $('#accordionDropdownMenuContainer').collapse('hide');
        }

    });
}

function fillStarsInOfferRating(rating) {

    //Temporary method to fill all the rating displays with stars based on a variable

    let allcards = document.querySelectorAll(".offer-rating .rating-display");

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


// function initiateDatepicker() {
//     $("#dateinput").datepicker();
// }

// function couponBuyButtonAddListener() {
//     document.querySelector(".buy-button a.btn").addEventListener("click", () => {
//         $("#couponsDropdownMenu .dropdown-menu").addClass("show");
//     });
// }

// function couponDropdownToggle() {
//     document.querySelector("#couponsDropdownMenuButton").addEventListener("click", () => {
//         let elem = $("#couponsDropdownMenu .dropdown-menu");

//         if (elem.hasClass("show")) {
//             $("#couponsDropdownMenu .dropdown-menu").removeClass("show");
//         }
//     });
// }

//////////////////////////////////////////////////////////////////////
// The timer
//////////////////////////////////////////////////////////////////////

function firstExample() {

    var yourDateToGo2 = new Date();

    // this variable holds the number of days to count down from
    // let x = 1;
    // yourDateToGo2.setDate(yourDateToGo2.getDate() + x);

    // this variable holds a string to be parsed into a Date object
    // method documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
    // Date-only forms are interpreted as a UTC time and date-time forms are interpreted as local time!
    let y = "2020-01-01T00:00:00"
    yourDateToGo2 = Date.parse(y);




    var timing2 = setInterval(
        function () {

            var currentDate2 = new Date().getTime();
            var timeLeft2 = yourDateToGo2 - currentDate2;

            var weeks2 = Math.floor(timeLeft2 / (1000 * 60 * 60 * 24 * 7));
            if (weeks2 < 10) weeks2 = "0" + weeks2;
            var days2 = Math.floor((timeLeft2 % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
            if (days2 < 10) days2 = "0" + days2;
            var hours2 = Math.floor((timeLeft2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            if (hours2 < 10) hours2 = "0" + hours2;
            var minutes2 = Math.floor((timeLeft2 % (1000 * 60 * 60)) / (1000 * 60));
            if (minutes2 < 10) minutes2 = "0" + minutes2;
            var seconds2 = Math.floor((timeLeft2 % (1000 * 60)) / 1000);
            if (seconds2 < 10) seconds2 = "0" + seconds2;

            document.querySelector("#countdown-elements-container #weeks-value").innerHTML = weeks2;
            document.querySelector("#countdown-elements-container #days-value").innerHTML = days2;
            document.querySelector("#countdown-elements-container #hours-value").innerHTML = hours2;
            document.querySelector("#countdown-elements-container #minutes-value").innerHTML = minutes2;
            document.querySelector("#countdown-elements-container #seconds-value").innerHTML = seconds2;

            // document.getElementById("countdown2").innerHTML = days2 + "d " + hours2 + "h " + minutes2 + "m " + seconds2 + "s";


            if (timeLeft2 <= 0) {
                clearInterval(timing2);
                document.getElementById("countdown2").innerHTML = "It's over";

            }
        }, 1000);

}


function animateCouponsBadgeInTooltip() {

    $("#ticketPurchaseModal").on("hidden.bs.modal", function () {
        $("#couponsDropdownMenuButton .coupons .badge").addClass("animatebadge");
    });

    document.querySelector("#couponsDropdownMenuButton .coupons .badge").addEventListener('animationend', (event) => {
        event.target.classList.remove("animatebadge");
      });
}
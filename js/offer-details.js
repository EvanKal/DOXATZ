window.addEventListener('DOMContentLoaded', () => {

    toggleDropdownMenuArrow();
    checkIfCardDescriptionOverflowsInCouponListing();
    toggleCollapseOnListGroupItemClick();
    toggleActiveClassInListGroup();
    fillStarsInOfferRating(3);

});


function toggleDropdownMenuArrow() {
    $("#accordionDropdownMenuContainer").on('hide.bs.collapse', function () {
        if ($('#categoriesAccordionButton .iconcontainer i').hasClass("menulinkiconrotate")) {
            $('#categoriesAccordionButton .iconcontainer i').removeClass("menulinkiconrotate");
        }
    });


    $("#accordionDropdownMenuContainer").on('show.bs.collapse', function () {
        if (!$('#categoriesAccordionButton .iconcontainer i').hasClass("menulinkiconrotate")) {
            $('#categoriesAccordionButton .iconcontainer i').addClass("menulinkiconrotate");
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
            let category = event.target.parentNode.previousSibling.querySelector("p").innerHTML;
            let subcategory = event.target.innerHTML;
            document.querySelector(".category-container h1").innerHTML = category;
            document.querySelector(".category-container h2").innerHTML = subcategory;
            document.querySelector(".category-container h1.slash").classList.remove("d-none");
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
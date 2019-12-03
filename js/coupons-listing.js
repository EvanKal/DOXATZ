window.addEventListener('DOMContentLoaded', () => {

    togglecategoriesDropdownMenuArrow();
    // toggleSixTabContainers();
    toggleFilters();
    checkIfCardDescriptionOverflowsInCouponListing();
    // draggableSubmenu();
    changeHeaderToCategoryName();
    toggleCollapseOnListGroupItemClick();
    toggleActiveClassInListGroup();
    toggleSpinner();

});


function togglecategoriesDropdownMenuArrow() {
    $("#accordionDropdownMenuContainer").on('hide.bs.collapse', function (event) {

        console.log("hidden");

        if ($('#categoriesAccordionButton .iconcontainer i').hasClass("menulinkiconrotate")) {
            $('#categoriesAccordionButton .iconcontainer i').removeClass("menulinkiconrotate");
        }
    });


    $("#accordionDropdownMenuContainer").on('show.bs.collapse', function (event) {

        console.log("Shown");

        if (!$('#categoriesAccordionButton .iconcontainer i').hasClass("menulinkiconrotate")) {
            $('#categoriesAccordionButton .iconcontainer i').addClass("menulinkiconrotate");
        }
    });
}

function toggleFilters() {
    document.querySelector(".filters-toggle-button-container button").addEventListener("click", () => {
        console.log("clicked");
        document.querySelector(".filters-container").classList.toggle("slidein");
    });

    document.querySelector(".filters-container .close").addEventListener("click", () => {
        document.querySelector(".filters-container").classList.toggle("slidein");
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



function changeHeaderToCategoryName() {
    document.querySelectorAll("#web-submenu .nav-link").forEach((elem) => {
        elem.addEventListener("click", () => {
            document.querySelector(".category-container h1").innerHTML = elem.querySelector("p").innerHTML;
        })
    });

    document.querySelectorAll("#mobile-submenu .categories-dropdown-item").forEach((elem) => {
        elem.addEventListener("click", (event) => {
            document.querySelector(".category-container h1").innerHTML = elem.querySelector("p").innerHTML;
            document.querySelector(".category-container h2").innerHTML = elem.nextSibling.querySelector("a.active").innerHTML;
            document.querySelector(".category-container h1.slash").classList.remove("d-none");
        })
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

function toggleSpinner() {
    document.querySelector(".more-coupons-button ").addEventListener("click", (event) => {

        document.querySelector(".more-coupons-spinner-container").classList.toggle("d-flex");
        document.querySelector(".more-coupons-spinner-container").classList.toggle("d-none");

    });
}


// Not used

// function togglecategoriesAccordionDropdown() {

//     document.querySelector("#categoriesAccordion").addEventListener("click", function() {

//     });
// }

// function togglecategoriesDropdownMenuArrow() {
//     $("#categoriesDropdownMenu").on('hide.bs.dropdown', function (event) {

//         if ($('#categoriesDropdownMenu .iconcontainer i').hasClass("menulinkiconrotate")) {
//             $('#categoriesDropdownMenu .iconcontainer i').removeClass("menulinkiconrotate");
//         }
//     });


//     $("#categoriesDropdownMenu").on('show.bs.dropdown', function (event) {
//         if (!$('#categoriesDropdownMenu .iconcontainer i').hasClass("menulinkiconrotate")) {
//             $('#categoriesDropdownMenu .iconcontainer i').addClass("menulinkiconrotate");
//         }
//     });
// }

// function toggleSixTabContainers() {
//     document.querySelectorAll(".six-tab-container").forEach((elem) => {
//         elem.addEventListener('click', (event) => {

//             let children = elem.parentNode.children;

//             for (let i of children) {
//                 if (i == elem) {
//                     i.classList.add("order1");
//                 } else {
//                     i.classList.remove("order1");
//                     i.querySelectorAll(".nav-link").forEach((navlink) => {
//                         navlink.classList.remove("active");
//                     })
//                 }

//             }
//         })
//     });
// }

// function draggableSubmenu() {


//     $('#sixTabRow1 ul').draggable({
//         axis: "x",
//         distance: 5,
//         drag: function (event, ui) {
//             // ui.helper.draggable("enable");
//             let helperScrollWidth = ui.helper.get(0).scrollWidth;
//             let parentclientWidth = ui.helper.get(0).parentNode.clientWidth;

//             let difference = parentclientWidth - helperScrollWidth;

//             console.log("helperScrollWidth", helperScrollWidth);
//             console.log("clientWidth", parentclientWidth);
//             console.log("difference", difference);

//             console.log(ui.helper.get(0).parentNode.clientWidth);

//             if (ui.position.left < difference) {
//                 ui.position.left = difference;
//                 console.log("true");
//             }

//             if (ui.position.left > 0) {
//                 ui.position.left = 0;
//                 console.log("false");
//             }

//         }
//     });
// }
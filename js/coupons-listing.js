window.addEventListener('DOMContentLoaded', () => {

    togglecategoriesDropdownMenuArrow();
    toggleSixTabContainers();
    toggleFilters();
    checkIfCardDescriptionOverflowsInCouponListing();
    draggableSubmenu();

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

function toggleSixTabContainers() {
    document.querySelectorAll(".six-tab-container").forEach((elem) => {
        elem.addEventListener('click', (event) => {

            let children = elem.parentNode.children;

            for (let i of children) {
                if (i == elem) {
                    i.classList.add("order1");
                } else {
                    i.classList.remove("order1");
                    i.querySelectorAll(".nav-link").forEach((navlink) => {
                        navlink.classList.remove("active");
                    })
                }

            }
        })
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

function draggableSubmenu() {

    
    $('#sixTabRow1 ul').draggable({
        axis: "x",
        distance: 5,
        drag: function( event, ui ) {
            // ui.helper.draggable("enable");
            let helperScrollWidth = ui.helper.get(0).scrollWidth;
            let parentclientWidth = ui.helper.get(0).parentNode.clientWidth;

            let difference = parentclientWidth-helperScrollWidth;

            console.log("helperScrollWidth", helperScrollWidth);
            console.log("clientWidth", parentclientWidth);
            console.log("difference", difference);

            console.log(ui.helper.get(0).parentNode.clientWidth);

            if(ui.position.left < difference) {
                ui.position.left = difference;
                console.log("true");
            }

            if(ui.position.left > 0) {
                ui.position.left = 0;
                console.log("false");
            }
            
        }
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
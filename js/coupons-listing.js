window.addEventListener('DOMContentLoaded', () => {

    togglecategoriesDropdownMenuArrow();
    toggleSixTabContainers();

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
    document.querySelectorAll(".six-tab-container").forEach((elem)=>{
        elem.addEventListener('click', (event)=>{

            let children = elem.parentNode.children;

            for(let i of children) {
                if(i==elem) {
                    i.classList.add("order1");
                } else {
                    i.classList.remove("order1");
                    i.querySelectorAll(".nav-link").forEach((navlink)=>{
                        navlink.classList.remove("active");
                    })
                }

            }
        })
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
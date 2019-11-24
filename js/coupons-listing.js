window.addEventListener('DOMContentLoaded', () => {

    // togglecategoriesDropdownMenuArrow();

});







// Not used

function togglecategoriesAccordionDropdown() {

    document.querySelector("#categoriesAccordion").addEventListener("click", function() {
        
    });
}

function togglecategoriesDropdownMenuArrow {
    $("#categoriesDropdownMenu").on('hide.bs.dropdown', function (event) {

        if ($('#categoriesDropdownMenu .iconcontainer i').hasClass("menulinkiconrotate")) {
            $('#categoriesDropdownMenu .iconcontainer i').removeClass("menulinkiconrotate");
        }
    });


    $("#categoriesDropdownMenu").on('show.bs.dropdown', function (event) {
        if (!$('#categoriesDropdownMenu .iconcontainer i').hasClass("menulinkiconrotate")) {
            $('#categoriesDropdownMenu .iconcontainer i').addClass("menulinkiconrotate");
        }
    });
}
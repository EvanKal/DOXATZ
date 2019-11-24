window.addEventListener('DOMContentLoaded', () => {

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

});
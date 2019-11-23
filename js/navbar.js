window.addEventListener('DOMContentLoaded', () => {

    document.querySelector('nav .navbar-toggler').addEventListener('click', () => {
      document.querySelector("#navbarResponsive").classList.toggle("slidein");
      document.querySelector(".navbar-toggler").classList.toggle("navbar-toggler-slidein");
    });
  
  
  
    // initiateIconCarousel();
    // modifyCarouselsToSingleSlideCarousel();
    checkIfCardDescriptionOverflows();
    fillStarsInCards(3);
    setUpSlickCarouselDisplayOptions();
    assignRipleToAllBtn();
    toggleLogIn();
    toggleuserDropdownMenuButtonArrow();
  

  
  });
  
  //NavBar event Handlers
  
  window.addEventListener('click', (event) => {
    menuLinkClickHandler(event);
  });
  
  function menuLinkClickHandler(event) {
    console.log(event.target);
    if (event.target.classList.contains("navmenulink")) {
      collapseAllLinks(event.target.parentElement.querySelector("div i"));
      event.target.parentElement.querySelector("div i").classList.toggle("menulinkiconrotate");
    }
  }
  
  function collapseAllLinks(clicked) {
    document.querySelectorAll("#navbarResponsive .navmenulink div i").forEach((elem) => {
      if (elem != clicked) {
        elem.classList.remove("menulinkiconrotate");
      }
    });
  }
  
  function toggleLogIn() {
    document.querySelectorAll('.loginbtn').forEach((elem) => {
      elem.addEventListener('click', () => {
        document.querySelectorAll('.signedout').forEach((elem) => { elem.classList.toggle("d-none") });
        document.querySelectorAll('.signedin').forEach((elem) => { elem.classList.toggle("d-none") });
      });
    });
  }

  function toggleuserDropdownMenuButtonArrow() {
    $("#userDropdownMenu").on('hide.bs.my-dropdown', function (event) {
      if ($('#userDropdownMenuButton .iconcontainer i').hasClass("menulinkiconrotate")) {
        $('#userDropdownMenuButton .iconcontainer i').removeClass("menulinkiconrotate");
      }
    });
    $("#userDropdownMenu").on('show.bs.my-dropdown', function (event) {
      if (!$('#userDropdownMenuButton .iconcontainer i').hasClass("menulinkiconrotate")) {
        $('#userDropdownMenuButton .iconcontainer i').addClass("menulinkiconrotate");
      }
    });
  }
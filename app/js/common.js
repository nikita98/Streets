// import '../libs/owl.carousel/dist/owl.carousel.min.js';


$(function () {

  function closeAll() {
    $(".nav__item_active").removeClass("nav__item_active")
    $(".menu-btn_active").removeClass("menu-btn_active");
    $(".hide-bg_active").removeClass("hide-bg_active");
    $(".nav__dropdown_active").removeClass("nav__dropdown_active");
  }

  $(".menu-btn").click(function () {
    if ($(this).hasClass("menu-btn_active")) {
      closeAll()
    }
    else {
      $(this).addClass("menu-btn_active")
      console.log("Меню открыто");
    }
  });

  $(".nav__item").click(function () {
    if ($(this).hasClass("nav__item_active")) {
      closeAll()
    }
    else {
      closeAll()
      $(this).addClass("nav__item_active");
      $(".menu-btn").addClass("menu-btn_active");
      $(".hide-bg").addClass("hide-bg_active");
      $(this).find(".nav__dropdown").addClass("nav__dropdown_active");
    }
  });


  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    merge: true,
    nav: true,
    responsive: {
      678: {
        mergeFit: true
      },
      1000: {
        mergeFit: false
      }
    }
  });
  console.log('123123');
  // Custom JS

});

$(document).ready(function () {
  var owl = $(".owl-carousel");

  owl.owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    mouseDrag: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    center: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      800: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
});



/* -----------------------------------------------------------------------
   TODO: Estilo Nuestros servicios
   ----------------------------------------------------------------------- */
 


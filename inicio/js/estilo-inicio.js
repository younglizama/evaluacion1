/* -----------------------------------------------------------------------
   TODO: Estilo Carrusel
   ----------------------------------------------------------------------- */
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
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
   TODO: Estilo LOGIN
   ----------------------------------------------------------------------- */
 

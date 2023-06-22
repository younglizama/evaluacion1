let contadorNavbar = 0  /* Se declara fuera para que sea una variable global*/


/*-----------------------------------------------------------------------
  TODO: Cuando cargue la pagina el navbar este
  ---------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  let posInicial = window.pageYOffset;
  
  let header = document.querySelector("header");
  let contenedor_navbar = document.querySelector(".contenedor-navbar");
  let tituloPag = document.querySelector("title").innerText;
  let anchoPantalla = window.innerWidth;

  function quitarEstiloNavbar() {
    contenedor_navbar.removeAttribute("style");
  }

  //TODO: Corrige error del navbar cuando no carga en el inicio de la pagina
  if (posInicial > 0 && contadorNavbar === 0) {  
     
    if (anchoPantalla <= 800) {
      header.classList.add("fixed")

    } else {  
      header.classList.add("scrolled");
      contadorNavbar++;
    }
  }

  if (!(tituloPag === "Inicio - Musu Performance")) {
    contenedor_navbar.style.height = getComputedStyle(header).height;
    contenedor_navbar.style.width = "100%";
    contenedor_navbar.style.backgroundColor = "black";
  }

  /* TODO: Animacion de bajada */
  function animacionBajada() {
    let posActual = window.pageYOffset;
    let anchoPantalla = window.innerWidth;

    if (anchoPantalla > 800) {
      if (posActual > 0) {
        if(tituloPag === "Inicio - Musu Performance"){

          if (posInicial >= posActual) { //DESPLAZAMIENTO HACIA ARRIBA  
            header.classList.remove("hidden");
          } else {                       //DESPLAZAMIENTO HACIA ABAJO
            if (contadorNavbar === 0) {
              header.classList.add("hidden");
              contadorNavbar++;
            }
          }
        }

        header.classList.add("scrolled");

        } else {
          header.classList.remove("scrolled");
          header.classList.remove("hidden");
          contadorNavbar = 0;
        }
    } else {
      contenedor_navbar.style.height = getComputedStyle(header).height;
      contenedor_navbar.style.width = getComputedStyle(header).width;
      contenedor_navbar.style.backgroundColor = getComputedStyle(header).backgroundColor;
      if (posActual > 0) {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }
    }
    posInicial = posActual;
  } 

  function handleResize() {
    if (tituloPag === "Inicio - Musu Performance") {
      quitarEstiloNavbar();
    }
  }

  window.addEventListener("scroll", animacionBajada);
  window.addEventListener("resize", handleResize);

});

/* -----------------------------------------------------------------------
   TODO: Codigo para NAVBAR Menor a 800PX
   ----------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  $(document).ready(function () {
    let btnMenu = $(".btn-menu");
    let showMenu = false;
    let nav = $("nav");
    let html = $("html");
    var overlay = $('<div class="overlay"></div>');

    html.append(overlay);   // Agregar el overlay al html una sola vez
    
    btnMenu.click(function (event) {
      
      event.stopPropagation();
      event.preventDefault();

      if (!showMenu) {                  /* Muestra el mini menu */
         nav.animate({ left: "0" });
        overlay.show();                 /* Mostrar overlay */

        setTimeout(function () {
          overlay.addClass("active");   /* Agregar clase para activar la transición del color */
        }, 10);

        html.addClass("menu-open");     /* Agregar clase al html para ocultar el desplazamiento de la página */
        html.css("overflow", "hidden"); /* Evitar desplazamiento de la página */
        showMenu = true;

      } else {                          /* Oculta el mini menu */
        nav.animate({ left: "-200%" });
        overlay.removeClass("active");  /* Remover clase para desactivar la transición del color */
        setTimeout(function () {
          overlay.hide();               /* Ocultar overlay después de la transición */
        }, 300);
        html.removeClass("menu-open");  /* Remover clase del html para habilitar el desplazamiento de la página */
        html.css("overflow", "auto");   /* Habilitar desplazamiento de la página */
        showMenu = false;
      }
    });

    // Cerrar el menú cuando se haga clic en cualquier parte de la página
    $(document).click(function () {
      nav.animate({ left: "-100%" });
      overlay.removeClass("active");    /* Remover clase para desactivar la transición del color */
      setTimeout(function () {
        overlay.hide();                 /* Ocultar overlay después de la transición */
      }, 300);
      html.removeClass("menu-open");    /* Remover clase del html para habilitar el desplazamiento de la página */
      html.css("overflow", "auto");     /* Habilitar desplazamiento de la página */
      showMenu = false;
    });
  });
});

/* -----------------------------------------------------------------------
   TODO: POPUP LOGIN
   ----------------------------------------------------------------------- */

$(document).ready(function () {
  const $wrapper = $(".wrapper");
  const $loginLink = $(".login-link");
  const $registerLink = $(".register-link");
  const $btnPopup = $(".btnLogin-popup");
  const $iconoClose = $(".icono-close");
  let $contenedorLogin = $(".contenedor-login");
  let $html = $("html");
  var overlay = $('<div class="overlay"></div>');

  $html.remove(overlay);


  $registerLink.on("click", function () {
    $wrapper.addClass("active");
  });

  $loginLink.on("click", function () {
    $wrapper.removeClass("active");
  });

  $btnPopup.on("click", function () {
    $contenedorLogin.addClass("active");
    $wrapper.addClass("active-popup");

    $iconoClose.on("click", function () {
      $contenedorLogin.removeClass("active")
      $wrapper.removeClass("active-popup");
    });
  });

  
});

  /* -----------------------------------------------------------------------
   TODO: arregla problema con email login
   ----------------------------------------------------------------------- */


  $(document).ready(function() {
    // Agregar la clase 'has-value' cuando los campos tienen un valor
    $('input[type="email"]').on('input', function() {
      if ($(this).val() !== '') {
        $(this).addClass('has-value');
      } else {
        $(this).removeClass('has-value');
      }
    });
  });

/* -----------------------------------------------------------------------
   TODO: Codigo para alinear iconos del Contact-Footer
   ----------------------------------------------------------------------- */

   $(document).ready(function() {
    function alinearIconos() {
      var anchoPantalla = $(window).width();
      var iconos = $(".redes-sociales ul li span");
      var primerIcono = iconos.first();
      var primerIconoLeft = primerIcono.position().left;
      if (anchoPantalla < 576) {
        iconos.each(function(index, icono) {
          var offset = primerIconoLeft - $(icono).position().left;
          $(icono).css("margin-left", offset + "px");
        });
      } else {
        iconos.css("margin-left", "0");
      }
    }
    
    alinearIconos();
    
    $(window).resize(alinearIconos);
  });

  

  
  


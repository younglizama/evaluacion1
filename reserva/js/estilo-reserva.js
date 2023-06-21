/*-----------------------------------------------------------------------
  TODO: Funcion para alinear el servicio segun su contenedor padre
  ---------------------------------------------------------------------- */
$(document).ready(function() {
    const contenedorReserva = $('.contenedor-reserva');
    const contenedorServicios = $('.cont-res-servicios');
  
    const paddingRight = parseInt(contenedorReserva.css('padding-right'));
  
    // Aplicar el valor del padding al contenedor de servicios
    contenedorServicios.css('right', paddingRight + 'px');
  });
  

  $(document).ready(function() {
    $('.cuadrado-reserva').click(function() {
      $('#myModal').modal('show');
    });

    $('#guardar-btn').click(function() {
      var nombre = $('#nombre-input').val();
      alert('Hola, ' + nombre + '. ¡Bienvenido!');
      $('#myModal').modal('hide');
    });
  });
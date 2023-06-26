/*---------------------------------------------------
     TODO: Funcionamiento MODAL 
---------------------------------------------------*/
$(document).ready(function() { 
    
    let reserva = [];

    $(".cuadrado-reserva").click(function () {
    $("#myModal").modal("show");
    });

    $("#guardar-btn").click(function () {
    var nombre = $("#nombre-input").val();
    alert("Hola, " + nombre + ". ¡Bienvenido!");
    $("#myModal").modal("hide");
    });
});
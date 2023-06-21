$(document).ready(function() {
    let mostrarLocales = $('#mostrarLocales');
    let Locales = $('#talleres');

    mostrarLocales.click(function() {
        $.get("https://midas.minsal.cl/farmacia_v2/WS/getLocalesTurnos.php", function(datos) {
            
            let listaDatos  = JSON.parse(datos);
            let cantDatos = listaDatos.slice(0, 10);

            $.each(cantDatos, function(i, item) {

                Locales.append("<tr><td>"+item.fecha+
                "</td><td>"+item.comuna_nombre+
                "</td><td>"+item.localidad_nombre+
                "</td><td>"+item.local_direccion+
                "</td><td>"+item.funcionamiento_hora_apertura+
                "</td><td>"+item.funcionamiento_hora_cierre+
                "</td><td>"+item.funcionamiento_dia+"</td></tr>");
            });
        });
    });
});
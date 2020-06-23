$(document).ready(function () {

    // Metodo de obtención de parámetros
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');

    // TODO: Metodo para cambiar el href, cambiar de acuerdo a la conveniencia
    $("#redirect-grafico").attr("href", '');

    // TODO: Consultas a la web service
    $.ajax({
        method: "GET",
        dataType: "json",
        url: "https://restcountries.eu/rest/v2/alpha/PE",
    }).done(function (data) {
        var nombrepais = data.name;
        var poblacion = data.population;
        var subreg = data.subregion;
        var capital = data.capital;

        $("#titulo").append(nombrepais)
        $("#1").text(capital)
        $("#2").text(poblacion)
        $("#3").text(subreg)

    }).fail(function (err) {
        var jsonData = err.responseJSON;
        console.log(jsonData.msg);
        alert(jsonData.msg);
    });
    return false;
});

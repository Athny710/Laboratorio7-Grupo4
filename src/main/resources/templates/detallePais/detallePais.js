$(document).ready(function () {
    // Metodo de obtención de parámetros
    //const urlParams = new URLSearchParams(window.location.search);
    //const name = urlParams.get('name');

    // Metodo para cambiar el href, cambiar de acuerdo a la conveniencia
    //$("#redirect-grafico").attr("href", '');

    // Consultas a la web service
    $.ajax({
        method: "GET",
        dataType: "json",
        url: "https://restcountries.eu/rest/v2/alpha/PE",
    }).done(function (data) {
        var nombrepais = data.name;
        var poblacion = data.population;
        var subreg = data.subregion;
        var capital = data.capital;
        $("#titulo").append(nombrepais);
        $("#1").text(capital);
        $("#2").text(poblacion);
        $("#3").text(subreg);
    });
    $.ajax({
        method: "GET",
        dataType: "json",
        url: "https://api.covid19api.com/total/dayone/country/peru/status/confirmed",
    }).done(function (data) {
        //var casos = data.Cases;
        //var fechaR = data.Date;
        var todo = data;
        var contentHtml = "";
        $.each(todo, function (i, ite) {
            contentHtml += "<tr>";
            contentHtml += "<td>" + ite.Cases + "</td>";
            contentHtml += "<td>" + ite.Date + "</td>";
            contentHtml += "</tr>";
        });
        $("table tbody").html(contentHtml);
    });
    return false;
});

$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: "https://api.covid19api.com/summary"
        }).done(function (data) {
                $("#newConfirmed").html(data.NewConfirmed);
                $("#newDeaths").text(data.TotalConfirmed);
                $("#newRecovered").text(data.NewDeaths);
                $("#totalConfirmed").text(data.TotalDeaths);
                $("#totalDeaths").text(data.NewRecovered);
                $("#totalRecovered").text(data.TotalRecovered);
        }).fail(function (err) {
            var jsonData1 = err.responseJSON;
            console.log(jsonData1.msg);
            alert(jsonData1.msg);
    });
});

// Función para hacer el sort de un array
function compare(a, b) {
    // TODO
}

// Función para devolver un formato de fecha
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    // TODO
    return '';
}
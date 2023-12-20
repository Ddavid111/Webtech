$(document).ready(function () {
    $.getJSON('getProducers', function (data) {
        var select = $('<select id="selector"></select>');
        var optionAll = $('<option value="all">All</option>');
        select.append(optionAll);
        $.each(data, function (key, value) {
            var option = $('<option value="' + value + '">' + value + '</option>');
            select.append(option);
        });
        $(".select").append(select);
    });
});

function list() {
    $("table").remove();
    var element = document.getElementById("selector");
    var selectorValue = element.options[element.selectedIndex].value;
    document.cookie = 'director=' + selectorValue;

    if(selectorValue === 'all') {
        $.getJSON('filmsData', function (data) {
            lister(data);
        });
    } else {
        $.getJSON('filmsData', function (data) {
            var tolist = []
            data.forEach(e => {
                if(e.director === selectorValue) {
                    tolist.push(e)
                }
            })
            lister(tolist);
        });
    }
}

function lister(data) {
    var table = $('<table id="tables"></table>');
    table.append(
        "<tr>" +
        "<th id='th'>Cím</th>" +
        "<th id='th'>Rendező</th>" +
        "<th id='th'>Főszereplő</th>" +
        "<th id='th'>Időtartam</th>" +
        "<th id='th'>Kiadás</th>" +
        "<th id='th'>Leírás</th>" +
        "<th id='th'>Nyelvek</th>" +
        "<th id='th'>Típus</th>" +
        "</tr>"
    );

    $.each(data, function (key, value) {
        var row = $('<tr></tr>')
        var title = $('<td id="td">' + value.title + '</td>')
        var director = $('<td id="td">' + value.director + '</td>')
        var main_actor = $('<td id="td">' + value.main_actor + '</td>')
        var duration = $('<td id="td">' + value.duration + ' perc'+ '</td>')
        var release = $('<td id="td">' + value.release + '</td>')
        var description = $('<td id="td">' + value.description + '</td>')

        let languages = '';
        let countOfLangs = 0;
        if (value.lang_hu) {
            languages += '<img src="../img/hu.svg" alt="Hungarian" title="Hungarian">'
            countOfLangs++
        }
        if (value.lang_en) {
            languages += '<img src="../img/gb.svg" alt="English" title="English">'
            countOfLangs++
        }
        if (value.lang_de) {
            languages += '<img src="../img/de.svg" alt="Deutsch" title="Deutsch">'
            countOfLangs++
        }
        if (value.lang_es) {
            languages += '<img src="../img/es.svg" alt="Espanol" title="Espanol">'
            countOfLangs++
        }
        if (value.lang_ru) {
            languages += '<img src="../img/ru.svg" alt="Russian" title="Russian">'
            countOfLangs++
        }
        if (value.lang_ro) {
            languages += '<img src="../img/ro.svg" alt="Romanian" title="Romanian">'
            countOfLangs++
        }

        var lang = $('<td id="td" class="languagesColumn">' + languages + '</td>')
        var type = $('<td id="td">' + value.type + '</td>')

        row.append(title)
        row.append(director)
        row.append(main_actor)
        row.append(duration)
        row.append(release)
        row.append(description)
        row.append(lang)
        row.append(type)

        table.append(row);

    });

    $(".filmList").append(table);


}
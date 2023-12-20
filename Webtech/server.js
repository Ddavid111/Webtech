var express = require('express');
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var app = express();

app.use(express.static(__dirname));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

var series =
    [
        {"title": "Test title", "director": "test director", "main_actor": "test actor", "seasons": 4,
            "description": "test description", "lang_hu": 1, "lang_en": 1, "lang_de": 1, "lang_es": 1, "lang_ru": 1, "lang_ro": 1
        }
    ];

var films =
    [
        {"title": "Test title", "director": "test director", "main_actor": "test actor", "duration": 200, "release": 2020,
            "description": "test description", "lang_hu": 1, "lang_en": 1, "lang_de": 1, "lang_es": 1, "lang_ru": 1, "lang_ro": 1,
            "type": "horror"
        },

    ];

app.get('/', function (req, res) {
    res.sendFile( '/index.html' , { root : __dirname + '/html'});
});

app.get('/series', function (req, res) {
    res.sendFile( '/series.html' , { root : __dirname + '/html'});
});

app.get('/seriesData', function (req, res) {
    res.send(series)
})

app.get('/films', function (req, res) {
    res.sendFile( '/films.html' , { root : __dirname + '/html'});
});

app.get('/filmsData', function (req, res) {
    res.send(films)
})

app.get('/help', function (req, res) {
    res.sendFile( '/help.html' , { root : __dirname + '/html'});

});

app.get('/addFilm', function (req, res) {
    res.sendFile( '/addFilm.html' , { root : __dirname + '/html'});
});

app.get('/addSeries', function (req, res) {
    res.sendFile( '/addSeries.html' , { root : __dirname + '/html'});
});

app.get('/getProducers', function (req, res) {
    let producers = []
    films.forEach(e => {
        producers.push(e.director)
    })
    res.send(producers)
})

app.get('/getTitles', function (req, res) {
    let titles = []
    series.forEach(e => {
        titles.push(e.title)
    })
    res.send(titles)
})

// POST methods

app.post('/addSeries', function (req, res) {

    var seriesData = {
        "title" : req.body.title,
        "director": req.body.director,
        "main_actor": req.body.main_actor,
        "seasons": req.body.seasons,
        "description": req.body.description,
        "lang_hu": req.body.lang_hu,
        "lang_en": req.body.lang_en,
        "lang_de": req.body.lang_de,
        "lang_es": req.body.lang_es,
        "lang_ru": req.body.lang_ru,
        "lang_ro": req.body.lang_ro,
        "type": req.body.type
    };
    series.push(seriesData);
    res.redirect('/series')
});

app.post('/addFilm', function (req, res) {
    var filmData = {
        "title" : req.body.title,
        "director": req.body.director,
        "main_actor": req.body.main_actor,
        "duration": req.body.duration,
        "release": req.body.release,
        "description": req.body.description,
        "lang_hu": req.body.lang_hu,
        "lang_en": req.body.lang_en,
        "lang_de": req.body.lang_de,
        "lang_es": req.body.lang_es,
        "lang_ru": req.body.lang_ru,
        "lang_ro": req.body.lang_ro,
        "type": req.body.type
    }

    films.push(filmData)
    res.redirect('/films')
})

var server = app.listen(8080, function () {
    var port = server.address().port;
    console.log("The app is running at http://127.0.0.1:" + port);
});

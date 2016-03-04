var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect('mongodb://localhost/assessment_3');
mongoose.model(
    'Powers',
    new Schema({
        "power_name": String
    },
    {
        collection: 'SuperPowers'
    }
));

mongoose.model(
    'Hero',
    new Schema({
            "alias": String,
            "first_name": String,
            "last_name": String,
            "city": String,
            "primary_power": String
        },
        {
            collection: 'Heroes'
        }
    ));

var Powers = mongoose.model('Powers');
var Hero = mongoose.model('Hero');


app.get('/power_list', function(req, res) {
    Powers.find({}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
    });
});


app.post('/hero', function(req, res) {
    var newHero = new Hero({
        "alias": req.body.alias,
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "city": req.body.city,
        "alias": req.body.alias,
        primary_power: req.body.primary_power
    });

    newHero.save(function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        Hero.find({}, function(err, data) {
            if(err) {
                console.log('ERR: ', err);
            }

            res.send(data);
        });
    });


});


app.get('/hero/:power', function(req, res) {
    Hero.find({"primary_power" : req.params.power}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
    });
});


app.delete('/hero/:id', function(req, res) {
    Hero.findByIdAndRemove({"_id" : req.params.id}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
    });
});


app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

app.set('port', process.env.PORT || 4242);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
// Load Packages
var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var mongoose        = require('mongoose');

// configure app to use bodyParser
app.use(bodyParser.urlencoded({extended : true}));  // url 인코딩 한 번만 적용할지 안할지 설정
app.use(bodyParser.json());

// configure server port
var port = process.env.port || 8080;

// load 'Book' module
var Book = require('./models/book');

// configure router
var router = require('./routes')(app, Book);

// run server
var server = app.listen(port, ()=>{
    console.log("Express server has started on port " + port);
});

// connect to mongoDB server
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
    console.log("Connected to mongod server");
});
mongoose.connect('mongodb://localhost/test');


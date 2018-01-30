
var express = require ('express');
var app = express();
var morgan =require('morgan');
var port =process.env.PORT || 8080 ;
var mongoose = require ('mongoose');
var Event =require('./app/models/event')
var bodyParser = require('body-parser')
var router=express.Router();
var approuter=require('./app/routes/route')(router);
var path = require('path')
var helmet = require('helmet') //pour la sécurité de notre application 

app.use(helmet())
app.use(morgan('dev'));
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api',approuter);
mongoose.connect('mongodb://localhost:27017/events',function(err){
    
    if (err){
        console.log('not connect to the database'+err);
    }else{
        console.log('connect');
    }
});

app.listen(port,function(){
    
    console.log('start server ');
    
});
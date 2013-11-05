var express = require('express');
var mustache = require("mustache-express");
var verify = require('browserid-verify')();
var blogControl = require('./pelicanControl');

var app = express();

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache')
   .set('views', __dirname + '/views');

app.use(express.logger())
   .use(express.static(__dirname + '/public'))
   .use(express.bodyParse())
   .use(express.cookieParse())
   .use(express.session({
      secret: process.env.SECRET
   });

app.get('/', function(req,res){
  res.render('index',{email:req.session.email});
}); 

app.get('/sidebar', function(req,res){
  res.render('sidebar', sidebar);
});

app.post('/blog/render', function(req,res){
  blogControl.render(req,res);
})

app.post('/blog/content', function(req,res){
  blogControl.add('content',req,res);
})

app.post('/blog/page', function(req,res){
  blogControl.add('page',req,res);
});

app.put('/blog/content', function(req,res){
  blogControl.update('content',req,res);
});

app.put('/blog/page', function(req,res){
  blogControl.update('page',req,res);
});



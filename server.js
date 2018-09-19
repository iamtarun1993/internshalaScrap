var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var Crawler = require("crawler");
var app     = express();


app.get('', function(req, res){
  url1=""
  request(url1, function(error, response, html){
    fs.readFile("index.html", function(err, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  });
});




app.get('/scrape', function(req, res){
  url = 'https://internshala.com/internships/python%2Fdjango-internship';
  var temp_c = new Crawler({
        maxConnections : 10,
        callback : function (error, res_temp, done) {
            if(error){
                console.log(error);
            }else{
                var $ = res_temp.$;
                console.log($("title").text());
               
            }
            done();
        }
    });
      temp_c.queue(url);



})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;

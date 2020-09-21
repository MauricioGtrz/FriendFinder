//Procfile
web: node app.js

//app.js
var express = require('express');
var app = express();
var http = require('http').Server(app);

app.get('/',function(req,res){
res.send('Hello');
})

http.listen(process.env.PORT || 8080, function(){
console.log('listening on *:8080');
});
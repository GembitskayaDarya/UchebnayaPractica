const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extetnded: true}));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/hello', function(req,res){
    res.send('hello, world');
});
app.listen(3000);
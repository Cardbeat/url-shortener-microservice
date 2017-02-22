const express= require('express');
const app = express();
const mongoose = require('mongoose');
const urlSchema = require('./app/models/urlSchema');


// relearn mongoose trought net ninja
// try to make an actual app with post/get rotes and return the url 
// this one will be long but rewarding 

app.set('views', './app/views');
app.set('view engine', 'pug');


app.get('/:query', (req, res) => {
  let newUrl = new urlSchema({
    original_url: req.params.query,
    short_url: '3123'
  });
});


app.listen(3000, () => {
  console.log('running at 3000');
});

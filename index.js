const express = require('express');
const mongoose = require('mongoose');
const urlSchema = require('./app/models/urlSchema');
const validUrl = require('valid-url');

(function() {



  "use strict";

  const app = express();
  // relearn mongoose trough net ninja
  // try to make an actual app with post/get rotes and return the url 
  // this one will be long but rewarding 

  app.set('views', './app/views');
  app.set('view engine', 'pug');


  app.get('/:query', (req, res) => {
    // if url => save to db
    // else => find in db
    let url = req.params.query;
    if(validUrl.isUri(url)) {
      let newUrl = new urlSchema({
      original_url: req.params.query,
      short_url: '3123'
    });
    } else {
      let id = req.params.query;
      mongoose.connect('mongodb://localhost/api_development');
      urlSchema.find({
        short_url: id
      }, (err, link) => {
        if(err) throw err;
        res.redirect(link.original_url);
      }); 
    }
  });


  app.listen(3000, () => {
    console.log('running at 3000');
  });





})();


const validUrl = require('valid-url');
const shortid =require('shortid');
const urlSchema = require('./app/models/urlSchema');


const mongoUri = 'mongodb://shortner:shortner@ds141098.mlab.com:41098/shortner';
const mongoOptions = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
const port = process.env.PORT || 3000;
const baseUrl = process.env.BASE_URL || ('htttp://localhost:' + port + '/');


const mongoose = require('mongoose');
mongoose.connect(mongoUri, mongoOptions);
mongoose.connection.on('error', err => {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});


const express = require('express');
const app = express();
app.set('port', port);


app.get('/new/*', (req,res) => {
  const original = req.url.replace('/new/', '');
  if(!validUrl.isWebUri(original)) {
    return res.json({error: "invalid URL"});
  }
  urlSchema.create({original_url: original}, (err, created) => {
    if(err) return res.status(500).send(err);
    res.json({
      original_url: created.original_url,
      short_url: baseUrl + created.short_id
    });
  });
});


app.get('/*', (req, res) => {
  urlSchema.findOne({short_id: req.url.slice(1)}).then( found => {
    console.log(found);
    console.log(mongoUri);
    if(found) {
      res.redirect(found.original_url);
    } else {
      res.send({ error: "No short url for this link" });
    }
  });
});

app.listen(app.get('port'), () => {
  console.log('Node app running at port', app.get('port'));
});

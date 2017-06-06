const mongoose = require('mongoose');

// ES6 Promises

mongoose.Promise = global.Promise;

//connect to mongodb
mongoose.connect('mongodb://shortner:shortner@ds141098.mlab.com:41098/shortner');

mongoose.connection.once('open', () => {
  console.log('Connection has been made, now make  fireworks');
}).on('error', error => {
  console.log(error);
});

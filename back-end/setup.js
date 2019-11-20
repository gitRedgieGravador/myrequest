  var mongoose = require('mongoose')

  var mongoDB = 'mongodb://127.0.0.1/bigdatadb';
  mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }, function(err) {
      if (err) {
          console.log("Can not connect ot mongodb!!")
      } else {
          console.log("Connected to: ", mongoDB)
      }
  });
const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/connection');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.use(require('./Routes'));

mongoose.set('debug', true);

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/dogwalkers',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );


db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
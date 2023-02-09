'use strict';

const express = require('express');
require('dotenv').config();
// import in the json
const jsonData = require('./assets/Programming-languages.json');

const app = express();

// test the server
app.listen(process.env.PORT, () => {
  console.log('Server is live');
});

app.get('/', (request, response) => response.send(jsonData));

/***
 * Create class for generating more structured data
 */
class ProgLang {
  constructor(oneObject) {
    this.title = oneObject.title;
    this.dateCreated = oneObject.dateCreated;
    this.description = oneObject.description;
    this.imageUrl = oneObject.imageUrl;
  }
}

const langs = jsonData.map((oneObject) => (
  new ProgLang(oneObject)
));

app.get('/objects', (request, response) => {
  try {
    response.status('200').send(langs);
  } catch {
    response.status('404').send('Languages not found');
  }
});

app.get('*', (req, res) => res.status('404').send('Not found'));

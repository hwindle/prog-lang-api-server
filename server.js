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
  constructor(title, dateCreated, description, imageUrl) {
    this.title = title;
    this.dateCreated = dateCreated;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}

//const testLang = new ProgLang('Python', '1991', 'Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation.', 'image');
//console.log(testLang);
let langs = [];

try {
  jsonData.map((lang) => {
    const newObj = new ProgLang(
      lang.title,
      lang.dateCreated,
      lang.description,
      lang.imageUrl
    );
    langs.push(newObj);
  });
} catch {
  console.log('data error');
}

//console.log(langs);
app.get('/objects', (request, response) => response.send(langs));
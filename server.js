const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')

app.use(express.static(__dirname + '/dist/spotify'))
app.use(bodyParser.json());

app.all("*", (req, res, next) => {
  res.sendFile(path.resolve("./dist/spotify/index.html"));
})

app.listen(8000, () => console.log('Listening on port 8000'));

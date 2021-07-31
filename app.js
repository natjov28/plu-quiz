const express = require('express');
const app = express();


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  });

app.get('/something', (request, res) => {
    res.send('somethingg!!')
    }
)

const port = process.env.PORT || '5000';

app.listen(port, () => console.log(`Example app listening on post ${port}!`))
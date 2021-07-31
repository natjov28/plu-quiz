const express = require('express');
const app = express();
const mongoose = require('mongoose');

var connected = false;
//mongodb+srv://test:<password>@cluster0.1ie43.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//DB Connection
getConnection = async () => {
    await mongoose.connect(
      'mongodb+srv://test:1234@cluster0.1ie43.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      }
    ).then(() => {
    console.log('Connected to DB!'); connected = true; }).catch(() => console.log('Error DB Connection!'))
};

getConnection();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');


  });

app.get('/connected', (request, res) => {
    res.send({ DBStatus: connected });
    }
)

const port = process.env.PORT || '5000';

app.listen(port, () => console.log(`Example app listening on post ${port}!`))
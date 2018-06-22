const axios = require('axios');
const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
        //two weeks
    }
}));

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
}).catch(error => {
    console.log('massive error', error);
});

//code goes here

const port = 4040;
app.listen(port, () => console.log(`Anna's server listening on ${port}!`))
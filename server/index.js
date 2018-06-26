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

app.get('/api/addNewListItem', (req, res) => {
    const {listItem} = req.body;
    req.app.get('db').add_new_list_item([listItem]).then(response => {
        res.status(200).send;
    }).catch(error => {
        console.log('error at addNewListItem', error);
        res.status(500.json({message: 'An error occurred at add new list item'}));
    })
})

const port = 4040;
app.listen(port, () => console.log(`Anna's server listening on ${port}!`))
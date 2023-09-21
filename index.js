const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
const host = 'localhost';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', (req,res) => {
    res.render("person", {id: 123, nimi: "Osmo-Susanna"})
});

app.listen(port, host, () => console.log(`${host}:${port} kuuntelee...`));

const express = require('express');
const nunjucks = require('nunjucks');
const mysql = require('mysql');

const APP_PORT = 3000;

const MYSQL_CONFIG = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
};

const app = express();
nunjucks.configure('src/views', {
  autoescape: true,
  express: app
})

const connection = mysql.createConnection(MYSQL_CONFIG);

app.get('/', (req, res) => {
  connection.query("SELECT * FROM people", (err, users) => {
    res.render('home.njk', { users })
  });
});

app.listen(APP_PORT, () => {
  console.log(`Node app listening on port ${APP_PORT}`)
})
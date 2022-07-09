const express = require('express');
const nunjucks = require('nunjucks');

const APP_PORT = 3000;

const app = express();
nunjucks.configure('src/views', {
  autoescape: true,
  express: app
})

app.get('/', (req, res) => {
  const users = [
    {
      name: 'Yan',
    }
  ]

  res.render('home.njk', { users })
})

app.listen(APP_PORT, () => {
  console.log(`Node app listening on port ${APP_PORT}`)
})
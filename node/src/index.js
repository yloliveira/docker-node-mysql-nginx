const express = require('express');

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Full Cycle Rocks!</h1>')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
const { log } = require('console')
const express = require('express')
const app = express()
const port = 3000;

app.get('/', function (req, res) {
  res.send('Hello World')
})

// console.log(`Server is running on ${port}`);
// console.log(`http://localhost:${port}/`);
// app.listen(3000)

app.listen(port, ()=> console.log(`Server is running on http://localhost:${port}/`))
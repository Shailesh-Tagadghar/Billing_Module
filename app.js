const { log } = require('console')
const express = require('express')
const ejs = require('ejs');
const app = express()

app.set('view engine', 'ejs')


const port = 3000;

app.get('/', function (req, res) {
    res.render('pages/index')
});

// console.log(`Server is running on ${port}`);
// console.log(`http://localhost:${port}/`);
// app.listen(3000)

app.listen(port, ()=> console.log(`Server is running on http://localhost:${port}/`))
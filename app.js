const { log } = require('console')
const express = require('express')
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connect = require('connect-mongo')
const exceljs = require('exceljs')
const mongodb = require('mongodb')
const pdfkit = require('pdfkit')
const xlsx = require('xlsx')
const nodemon = require('nodemon')

const app = express()
const port = 3000;


app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render('pages/index')
});

app.get('/', function (req, res) {
    res.render('/index.html')
});


// console.log(`Server is running on ${port}`);
// console.log(`http://localhost:${port}/`);
// app.listen(3000)

app.listen(port, ()=> console.log(`Server is running on http://localhost:${port}/`))
const { log } = require('console')
const express = require('express')
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const connect = require('connect-mongo')
const exceljs = require('exceljs')
// const mongodb = require('mongodb')
const pdfkit = require('pdfkit')
const xlsx = require('xlsx')
const nodemon = require('nodemon')
var cors = require('cors');
const path = require('path');

const app = express()
const port = 3000;




// mongodb+srv://<username>:<password>@cluster0.se5bb8j.mongodb.net/?retryWrites=true&w=majority

//Mongo DB connection

const connect_str = "mongodb+srv://shailesh-billing:admin@cluster0.se5bb8j.mongodb.net/billing?retryWrites=true&w=majority"

app.use(express.json());
app.use(cors());

mongoose.connect(connect_str, { useNewUrlParser: true , useUnifiedTopology: true})
	.then( () => console.log("Connected successfully...") )
	.catch( (err) => console.log(err) );

const userSchema = new mongoose.Schema({
        Customer_Name: String,
        Mobile_No: Number,
        Email: String,
        Shop_Name: String,
        Shop_Address: String
    });
    
const students = new mongoose.model("customers", userSchema);




app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));


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
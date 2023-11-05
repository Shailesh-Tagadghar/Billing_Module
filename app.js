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
const session = require('express-session');

const app = express()
const port = 3000;



const halfhour = 12 * 60 * 60 * 1000;

app.use(session({
    name: 'new_ui',
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: halfhour },

}));

// mongodb+srv://<username>:<password>@cluster0.se5bb8j.mongodb.net/?retryWrites=true&w=majority

//Mongo DB connection

const connect_str = "mongodb+srv://shailesh-billing:admin@cluster0.se5bb8j.mongodb.net/billing?retryWrites=true&w=majority"


app.use(express.json());
app.use(cors());

mongoose.connect(connect_str, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected successfully..."))
    .catch((err) => console.log(err));

const Customer = mongoose.model('Customer', {
    name: String,
    mobileNo: String,
    email: String,
    shopName: String,
    shopAddress: String,
});

// const billing = new mongoose.model("customers", userSchema);




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

app.get('/customerForm', (req, res) => {
    res.render('pages/CustomerForm');
});

app.post('/addCustomer', async (req, res) => {
    const { name, mobileNo, email, shopName, shopAddress } = req.body;

    try {
        // Create a new Customer document and save it to MongoDB
        const customer = new Customer({ name, mobileNo, email, shopName, shopAddress });
        await customer.save();
        res.status(200).send('Customer Details has been saved successfully');
    } catch (err) {
        res.status(500).send('Error saving customer data');
    }
});

app.get('/CustomerDetails', (req, res) => {
    res.render('pages/CustomerDetails');
});


app.get('/CustomerBills', (req, res) => {
    res.render('pages/CustomerBills');
});


// console.log(`Server is running on ${port}`);
// console.log(`http://localhost:${port}/`);
// app.listen(3000)

app.listen(port, () => console.log(`Server is running on http://localhost:${port}/`))


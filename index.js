const axios = require('axios')
const mongoose = require('mongoose');
const cookie = require('cookie-parser');
const express = require("express");
const app = express();
const port = 9000;
const passport = require('passport')
const fs = require('fs');
const { MongoClient, ServerApiVersion } = require('mongodb');
const path = require("path");
const {json} = require("express");
const bodyparser = require("express");
const stripe = require('stripe')('sk_test_51LTCmkA6hkZ7OMJv5C2LuZ5QyPyXAMuzarLZnLoOq43SRNjcLZgVtcl1v52QS8TLRRuQAwXyEEUOPeZIrCY3pWDO00ZYigsDXS');

var publishkey ="pk_test_51LTCmkA6hkZ7OMJvDkBid6cLOhEClKsDJRlSKaqsQHyenM7fMUq7DECxQVWiXZnerfWzrLACH3pEmHGYd1nU2Uj300qlWpJCb7"
var secretkey ="pk_test_51LTCmkA6hkZ7OMJvDkBid6cLOhEClKsDJRlSKaqsQHyenM7fMUq7DECxQVWiXZnerfWzrLACH3pEmHGYd1nU2Uj300qlWpJCb7"
const uri = "mongodb+srv://Abs:Admin@cluster0.5swzs.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
app.use(bodyparser.urlencoded({extended:false}))
app.use(json())

app.use(express.static('public'))
app.use("/css", express.static(__dirname + 'public/css'))
app.use("/js", express.static(__dirname + 'public/js'))
app.use("/img", express.static(__dirname + 'public/js/images'))
//app.use("/Scrolling")
//global.score=0 ;


const start = async() =>{
    try{
        await client.connect()
        console.log('connected')
    }
    catch (e) {
        console.log(e)
    }
}
start()

app.get('/donations.ejs', function(req, res){
    res.render('donations.ejs', {
        key: "pk_test_51LTCmkA6hkZ7OMJvDkBid6cLOhEClKsDJRlSKaqsQHyenM7fMUq7DECxQVWiXZnerfWzrLACH3pEmHGYd1nU2Uj300qlWpJCb7",
    })
})

app.post('payment', function(req, res){

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken,
        name: 'Abishev Amirhan',
        address: {
            line1: '2',
            postal_code: '222222',
            city: 'Michigan',
            state: 'Michigan',
            country: 'USA',
        }
    })
        .then((customer) => {

            return stripe.charges.create({
                amount: 2500,     // Charing Rs 25
                description: 'Web Development Product',
                currency: 'USD',
                customer: customer.id
            });
        })
        .then((charge) => {
            res.send("Success")  // If no error occurs
        })
        .catch((err) => {
            res.send(err)       // If some error occurs
        });
})

app.get('/', (req, res) =>
{ res.render("main.ejs");
});
app.get('/views/puzzle.ejs', (req, res) =>
{ res.render("puzzle.ejs");
});
app.get('/views/main.ejs', (req, res) =>
{ res.render("main.ejs");
});
app.get('/views/main.ejs', (req, res) =>
{ res.render("main.ejs");
});
app.get('/views/i.ejs', (req, res) =>
{ res.render("i.ejs");
});
app.get('/views/desc.ejs', (req, res) =>
{ res.render("desc.ejs");
});
app.get('/views/profile.ejs', (req, res) =>
{ res.render("profile.ejs");
});
app.get('/views/register.ejs', (req, res) =>
{ res.render("register.ejs");
});
app.get('/views/donations.ejs', (req, res) =>
{ res.render("donations.ejs");
});
//

//
app.set('views engine', 'ejs');
app.listen(9000)
const router = require('express').Router();
const mysql = require('mysql');
require('dotenv').config()

var connection = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,

    //Your Username
    user: process.env.USER,

    //Your password
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

router.get('/products', (req, res)=>{
    connection.query('SELECT Products.product_name, Prices.price, Products.URL FROM Products INNER JOIN Prices ON Products.product_id = Prices.product_id;', function(err, data){
        if(err){
            throw err
        }
        res.send(data)
    })
})

module.exports = router
require('./config/config');

const mongoose = require('mongoose')
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) 
// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/users'))
app.use(require('./routes/programs'))

mongoose.connect(process.env.URL_DB, { auth:{
    authdb: "admin",
    user: process.env.URL_DB_USER,
    password: process.env.URL_DB_PWD
}},(err,res)=>{
    if(err){
        throw err;
    } else{
        app.listen(process.env.PORT,()=>{
            console.log("Escuchando puerto: ", process.env.PORT)
        })
    }

})


        


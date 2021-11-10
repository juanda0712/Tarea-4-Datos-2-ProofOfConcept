const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');


//connect to DB
mongoose.connect('mongodb://localhost:27017/PoCDB');
const db = mongoose.connection;

db.on('error',(err)=>{
    if(err){
        console.log(err);
    }
});

db.once('open', () => {
    console.log('Mongo DB Ready to use!!');
});

//Set the app
const app = express();

//config
app.set('port', 3000);
app.set('jason spaces', 2);

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); //mensajes sencillos
app.use(express.json());

//API dominio/api/routes
app.use('/api', require('./routes/rt'));

//Server listening
app.listen(app.get('port'), ()=>{
    console.log('Server is ready BABY!!');
});




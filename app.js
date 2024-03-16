const express = require('express');
const morgan = require('morgan');
const db = require('./mongadb')
const studentRoute = require('./Routes/studentRoutes');


const app = express();
app.use(morgan('dev'));
app.use('/api',studentRoute);









app.listen(3000,()=>{
    console.log("listenting to port 3000")
})
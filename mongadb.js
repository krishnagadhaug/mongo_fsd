const mongoose = require('mongoose');
let compass_url ='mongodb://localhost:27017/test';
let mongodb_url = "mongodb+srv://gadha:gadha@cluster0.7plurii.mongodb.net/gadha?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongodb_url).then(()=>{
    console.log("db connected");
})
.catch((err) =>{
    console.log(err);
})
const mongoose = require("mongoose");

//Backend_server (my DB name)

mongoose.connect('mongodb://127.0.0.1:27017/Backend_server').then(()=> console.log("DB connected successfully")).catch(err=> {console.log(err)});
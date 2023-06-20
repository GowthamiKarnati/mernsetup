//import modules
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();




//app

const app= express();




//db
//mongodb+srv://user123:<password>@cluster0.89qtrvw.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(()=>console.log("DB Connected"))
.catch(err => console.log(err));

//middlewares
app.use(morgan("dev"));
app.use(cors({ origin:true, credentials: true}));

//routes
const testRouters = require("./routes/test");
app.use("/",testRouters);
//port
const port = process.env.PORT || 8080;
app.listen(port, ()=>console.log("server started"));

const bodyParser = require('body-parser');
const express=require('express');
const app=express();
const dbConnect=require("./config/dbConnect");
const dotenv=require("dotenv").config();
const PORT=process.env.PORT||4000;
const authRouter=require('./routes/authRoutes');

dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/api/user",authRouter);
app.listen(PORT,()=>{
 console.log('server is listening on PORT PORT '+PORT);
});
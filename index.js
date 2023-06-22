const express=require('express')
const app=express()
const dotenv=require('dotenv').config()
const PORT=process.env.PORT||4000;

app.listen(PORT,()=>{
 console.log('server is listening on PORT PORT '+PORT);
});
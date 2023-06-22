const {default:mongoose}=require('mongoose');

const dbConnect=()=>{
    try{
        const conn=mongoose.connect(process.env.MONGODB_URL);
        console.log("db connected on "+process.env.MONGODB_URL);
    }catch(error){
        console.log('db error');
    }
};
module.exports=dbConnect;
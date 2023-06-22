const User=require('../models/UserModel');

const createUser=async (req,res)=>{
    const email =req.body.email;
    console.log(email);
    const findUser = await User.findOne({ email: email });
    console.log(findUser);
    if(!findUser){
        res.json({ success:true, msg:"create a new user" });
    }else{
        res.json({ success:false, msg:"Exists already" });
    }
};

module.exports={createUser};
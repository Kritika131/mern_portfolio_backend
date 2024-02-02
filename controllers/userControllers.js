import userModel from "../models/userModel.js"
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"


export const adminSignUp = async(req,res)=>{
  try{
    console.log(req.body);
   
    const {email,password} = req.body
    
     
   
    //check if user exist
    const existingUser = await userModel.findOne({email})
    if(existingUser){
      
      return res.status(400).json({success:false,msg:"User already exists!"})
    }
    
    //hash the password
    const salt = await bcrypt.genSalt()
    const hashPass = await bcrypt.hash(password,salt)

    //create a new user
    const newUser = new userModel({
      email,password:hashPass
    })
    //save the new user
    const userDocc = await newUser.save();
    console.log(userDocc);
    if(userDocc){ 
      return res.status(200).json({success:true,msg:"User registered successfully!",user:userDocc})
       
    } else {
      return res.status(200).json({success:false,msg:"Some Error occur while creating new user!"})

    }

  } catch(err){
    res.status(500).json({success:false,msg:"Registration failed!", error:err.message})
    console.log("signup-----",err);
  }
}

export const adminLogin=async(req,res)=>{
  try{
    const {email,password} = req.body;
    const existingUser = await userModel.findOne({email})
    if(!existingUser){
      
      return res.status(400).json({success:false,msg:"User doesn't exist!"})
    }
    //compare the password with the hashed password
    const isMatch = await bcrypt.compare(password,existingUser.password)
    if(!isMatch){
      return res.status(400).json({success:false,msg:"Invalid Credetials!"})
    }
    //Generate jwt token
    const token = jwt.sign({id:existingUser._id},process.env.JWT_SECRET)
    delete existingUser.password // deleting password field because this data will send to client
    res.status(200).json({success:true,msg:"Login successfully!",token,user:existingUser})
    
    // const user = await userModel.findOne({email:req.body.email,password:req.body.password})
    // if(user){
    //   user.password=""
    // } else {
    //   res.status(500).json({success:false,msg:"Invalid email or password!",data:user})
    // }

  } catch(err){
    res.status(500).json({success:false, msg:err.message})
    console.log("login--",err);
  }
}
import express from "express"
import { config } from "dotenv";
import connect from "./dbconnection.js";
import portfolioRoute from "./routes/portfolioRoute.js"
import adminRoute from "./routes/userRoute.js"
import cors from 'cors'

config()

const app = express();
const port = process.env.PORT ||  6060
// --------------------------Deployment part--------------------
// const path = require("path")


// -------------------------------------------------------------

// middlewares 
app.use(express.json())
app.use(cors())
app.use('/portfolio',portfolioRoute)
app.use('/admin',adminRoute)


app.get("/",(req,res)=>{
  res.send("hello")
})
connect().then(()=>{
  try{
    app.listen(port,()=>{
    
      console.log("server connected to port ",port);
    })
    
  } catch(err){
    console.log('cannot connect tot the server');
  }
}).catch(err=>{
  console.log('invalid db connection');
})

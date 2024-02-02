import mongoose from "mongoose";

import {MongoMemoryServer} from "mongodb-memory-server"
import { config } from "dotenv";
config();
const mongo_url= process.env.MONGODB_URL
const connect =async()=>{
   // const mongod = await MongoMemoryServer.create();
   // const getUri = mongod.getUri();
   
   // mongoose.set('strictQuery',true) 

   // const db = await mongoose.connect(getUri)
   // return db;
   // console.log("url----",process.env.MONGODB_URL);
   try{
      const db = await mongoose.connect(mongo_url)
     
      console.log("db connected!");
      
   } catch(err){
      console.log("database error ",err);
   }
}
export default connect;
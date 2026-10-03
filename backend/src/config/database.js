import dotenv from "dotenv";

const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);
dotenv.config();

import mongoose from "mongoose";

async function connecttodb(){
    await mongoose.connect(process.env.MONGO_URI)
    console.log("mongodb connected sucesfully");
    
}

export default connecttodb;
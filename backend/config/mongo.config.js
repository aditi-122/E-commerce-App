const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL;
const connectTODb = async ()=>{
    try{
    await mongoose.connect(MONGO_URL);
     statuscose(200).json({msg:"connected to db"});
    }
    catch(err){
        console.log(err);
        statuscose(500).json({msg:"error in connecting to db"});
    }
}
module.exports = connectTODb;
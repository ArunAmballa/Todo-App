//Connecting MongoDb with BackEnd

const mongoose=require('mongoose');

require("dotenv").config();
 //The data that is present in .env is now loading into process object
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("Db Connection is Successfull"))
    .catch((err)=>{
        console.log("Error In Connecting Database");
        console.error(err.message);
        process.exit(1);
    });
}

module.exports=dbConnect;  //This is how we export in BackEnd
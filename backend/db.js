const mongoose = require("mongoose");

// const mongoURI = "mongodb+srv://gofood:gofood@cluster0.ixkyhse.mongodb.net/?retryWrites=true&w=majority"
const mongoURI = "mongodb+srv://gofood:gofood@cluster0.ixkyhse.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('strictQuery', false);
const mongoDB = async() =>{
    await mongoose.connect(mongoURI,async(err,result)=>{
        if(err) console.log("---",err)
        else{
            console.log("connected to mongo");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(function(err,data){
                if(err) console.log(err);
                else console.log(data);  
            })
            
        }
    })
}
module.exports = mongoDB;

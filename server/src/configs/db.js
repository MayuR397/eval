const mongoose=require("mongoose");

module.exports=()=>{
    return mongoose.connect("mongodb+srv://teacher:teacher_123@cluster0.uuepp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}
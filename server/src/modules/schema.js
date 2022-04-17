const mongoose =require("mongoose");
 
const teacherSchema=new mongoose.Schema({
  image:{type:String,required:false},
  name:{type:String,required:true},
  age:{type:Number,required:true},
  gender:{type:String,required:true},
  clases:[{type:String,required:true}],
  
},{
    versionKey:false,
    timestamps:true,
})
module.exports=mongoose.model("teacher",teacherSchema)
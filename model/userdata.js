const mongoose= require('mongoose');
// // const { stringify } = require('querystring');

const userSchema=new mongoose.Schema({
 
           email:{
                      type:String,
                      required:true,
                      unique:true,
           },
           password:{
                      type:String,
                      required:true,
                      // unique:true,
           },
           // name:{
           //            type:String,
           //            required:true,
           // }
},{
           timestamps:true,
});

const user=mongoose.model('user',userSchema);

module.exports=user;
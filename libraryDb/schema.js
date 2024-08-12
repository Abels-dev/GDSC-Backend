const mongoose=require("mongoose")
const Schema=mongoose.Schema;
// title: String, required
// ○
// author: String, required
// ○
// yearPublished: Number, required
// ○
// genres: Array of Strings

//availableCopies: Number, default to 5
const bookSchema=new Schema({
      title:{
          type:String,
          required:true
      },
      author:{
          type:String,
          required:true
      },
      publishedYear:{
          type:Number,
          required:true
      },
      generes:{
          type:[String]
      },
      availableCopies:{
          type:Number,
          default:5
      }
})
const Book=mongoose.model("Book",bookSchema);
module.exports=Book
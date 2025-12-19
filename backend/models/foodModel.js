import mongoose from "mongoose";

// scheema for describe food property
const foodScheema = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String,required:true},
    price: {type:Number,reqired:true},
    image: {type:String,required:true},
    category: {type:String,required:true}
})

const foodModel = mongoose.models.food || mongoose.model("food",foodScheema)

export default foodModel;
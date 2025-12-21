import { data } from "react-router-dom";
import foodModel from "../models/foodModel.js";
import fs from 'fs'   // import file system



// add food item
const addFood = async (req,res) => {

    // Check if the file actually exists before accessing .filename
    if (!req.file) {
        return res.json({ success: false, message: "Image not uploaded. Please check the field name." });
    }

    let image_filename = `${req.file.filename}`;   // store uploaded file name
    
    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save();
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// all food list display all food item listed in the database
const listFood = async (req,res) => {
    try {
        const foods = await foodModel.find({});  // get all the data from food item
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }
}

// remove food item from database
const removeFood = async (req,res) => {
    try {
        const food = await foodModel.findById(req.body.id);   // find food image from body id
        fs.unlink(`uploads/${food.image}`,()=>{})  // delete food image from folder

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }
}

export {addFood,listFood,removeFood}
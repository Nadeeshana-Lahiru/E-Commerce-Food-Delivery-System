// logic for connect to the database
import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://nadeeshana:Nadee2001@cluster0.bhzeqd0.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
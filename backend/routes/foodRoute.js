import express from 'express'
import { addFood } from '../controllers/foodController.js'
import multer from 'multer'  // access image storage system

const foodRouter = express.Router();

// Image Storage Engine 
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`) // file name will become unique with original name , cb = call back
    }
})

const upload = multer({storage:storage})  // store image in upload folder

// send the data to server
foodRouter.post("/add",upload.single("image"),addFood)





export default foodRouter;
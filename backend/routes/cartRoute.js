import express from "express"
import { addToCart,removeFromCart,getCart } from "../controllers/cartController.js"

//create a route for cart
const cartRouter = express.Router();

// create end point for add,remove,get items from cart
cartRouter.post("/add",addToCart)
cartRouter.post("/remove",removeFromCart)
cartRouter.post("/get",getCart)

export default cartRouter;
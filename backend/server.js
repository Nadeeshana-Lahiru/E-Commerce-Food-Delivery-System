import express from "express";
import cors from "cors"
import { connectDB } from "./config/db.js";


const app = express()  // app config
const port = 4000  // initialize port number where our server is running

// middleware
app.use(express.json())   // when ever get the request fron frontend it will pass to json
app.use(cors())  // we can access backend from frontend

// db connection
connectDB();

// request the data from the server, give / end point with response message
app.get("/",(req,res)=>{
    res.send("API Working")
})

// run the server with port number
app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`);
})
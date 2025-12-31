import jwt from "jsonwebtoken"

// next is call back function
const authMiddleware = async (req,res,next) => {
    // take the token from the header
    const {token} = req.headers;
    if (!token) {
        return res.json({success:false,message:"Not Autherized Login Again"})
    }

    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        // middleware take the token and convert into id
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export default authMiddleware;
import  jwt  from "jsonwebtoken"
import User from "../models/User.js"

export const protect = async (req,res,next) =>{
    try {
        const token = req.headers.token

        if(!token) {
            res.status(400)
            throw new Error("Not authorized, please login")
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET)

        const user = await User.findById(verified.id).select("-password")

        if(!user){
            res.status(400)
            throw new Error("User not found")
        }
        
        req.user = user
        req.token = token
        next()

    } catch (error) {
        res.status(400)
        next(error)
    }
}
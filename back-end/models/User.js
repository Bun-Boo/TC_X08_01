import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    userName:{
        type: String,
        unique: true
    },
    phone: {
        type: String,
    },
    password:{
        type: String,
        required: true,
        minlenght:6,
    },
    admin:{
        type: Boolean,
        default: false
    }
}, {timestamps: true}
)
export default mongoose.model("user", userSchema);
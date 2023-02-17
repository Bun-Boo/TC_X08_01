import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    googleId: String,
    email: String,
    name: String
}, {timestamps: true}
)
export default mongoose.model("GgUser", userSchema);
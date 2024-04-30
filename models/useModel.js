
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required: [true,"Must provide a username"],
        unique: [true,"mUST BE UNIQUE"]
    },
    email:{
        type:String,
        required: [true,"Must provide a email"],
        unique: [true,"Must be unique"]
    },
    password:{
        type:String,
        required: [true,"Must provide a username"],
    },
},{
    timestamps: true
})

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;




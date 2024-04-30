import mongoose from "mongoose";

export async function connectDB(){
    try {
        await mongoose.connect('mongodb+srv://akhiljohny:akhiljohny@backenddb.mfi5sxt.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB');
        console.log("Connected to DB");
    } catch (error) {
        console.log("Error while connecting", error);
    }
}
import mongoose from "mongoose";

// create a connection to mongodb using mongoose

async function dbconnection() {
    try {
        await mongoose.connect("mongodb+srv://33Jimbo33:Veritas33@coaching-mern.0grubt3.mongodb.net/?retryWrites=true&w=majority");
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}

// await mongoose.connect("mongodb+srv://33Jimbo33:Veritas33@coaching-mern.0grubt3.mongodb.net/?retryWrites=true&w=majority").then(() => console.log("MongoDB connected")).catch(err => console.log(err));

export default dbconnection;
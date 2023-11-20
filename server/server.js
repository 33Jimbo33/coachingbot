//set up express
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const PORT = 4000; //server port; 3000 is for react
const app = express();

app.use(cors()); //allow cross origin API requests (from react to express)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// create a connection to mongodb using mongoose
mongoose.connect("mongodb+srv://33Jimbo33:Veritas33@coaching-mern.0grubt3.mongodb.net/?retryWrites=true&w=majority").then(() => console.log("MongoDB connected")).catch(err => console.log(err));

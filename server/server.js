//set up express
import express from 'express';
import dbconnection from './database/mongodb.js';
import businessModelsApis from './apis/businessmodels.js'; // this is odd because nothing called "businessModelApis" is exported from businessmodels.js (so I'm unsure what this is importing - but it seems to be working...)
import chatGPTApis from './apis/chatgpt.js';

const PORT = 4000; //server port; 3000 is for react
const app = express();
import cors from 'cors';
import bodyParser from 'body-parser';

app.use(cors()); //allow cross origin API requests (from react to express)
app.use(bodyParser.json()); //parse incoming JSON data

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/businessmodel', businessModelsApis); //use the business model apis for any fetch to 'businessmodel'
app.use('/gpt', chatGPTApis); //use the chatgpt apis for any fetch to 'gpt'

dbconnection(); //connect to mongodb

//start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
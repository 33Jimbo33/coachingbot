import { Router } from 'express';
import OpenAI from "openai";


const router = Router();

router.post('/', async (req, res) => {
    console.log("Successfully received Post request.");
//    res.json({message : "Successfully received response."});

    try {
        const OPENAI_API_KEY_INSECURE = "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";
        //console.log("OpenAI API Key: ", OPENAI_API_KEY_INSECURE);
        const openai = new OpenAI({ 
            apiKey: OPENAI_API_KEY_INSECURE
        });

        /* Below is the secure way to do it, but I'm not sure why the environment variable isn't working so I'm doing it in the insecure way above
        console.log("OpenAI API Key: ", process.env.OPENAI_API_KEY);
        const openai = new OpenAI({ 
            apiKey: process.env.OPENAI_API_KEY // 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 // API key from my OpenAI account
        });
        */

        const completion = await openai.chat.completions.create({
            //send the user's input to the API as a prompt
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are an innovation coach for entrepreneurs and intrapreneurs." },
                { role: "user", content: "Summarize the following business idea: " + req.body.BMdescription}
            ],
            temperature: 0.5,
            max_tokens: 120,
        });

        console.log(completion.choices[0]);
        res.json(completion.choices[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while making the API request.', error: error.message });
    }

});

export default router;
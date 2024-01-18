import express, { response } from "express";
import * as dotenv from 'dotenv';
// import { Configuration, OpenAIApi } from 'openai';
// import OpenAI, { Configuration } from 'openai';
import OpenAI from 'openai';


dotenv.config();
const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


router.route('/').get((req, res) => {
    res.send('hello from dalle routes')
});

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;
        // const aiResponse = await openai.createImage({
        //     model: "dall-e-3",
        //     prompt: "a white siamese cat",
        //     n: 1,
        //     size: "1024x1024",
        //   });
        //   console.log(aiResponse)
        //   image_url = aiResponse.data.data[0].url;
        //   res.status(200).json({
        //     success: true,
        //     message: 'Image generated successfully',
        //     imageUrl: image_url,
        //   });


        const aiResponse = await openai.createImage({
            model: "dall-e-3",
            prompt,
            n: 1,
            size: '1024x1024',
            response_formate: 'b64_json',
        });
        const image = aiResponse.data.data[0].b64_json;
        res.status(200).json({ photo: image })
        
          

    } catch (error) {
        console.log(error);
        res.status(500).send(error?.response.data.error.message);
    }
});





export default router;
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
// 1:12 minutes
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);


app.get('/', async (req, res) => {
    res.send('Hello from DALL-E!');
});






// CONNECTION TO MONGODB AND SETTING A PORT FOR SERVER
const startServer = () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(6001, () => console.log('Server has started on port http://localhost:6001'));
    } catch (error) {
        console.log(error)
    }
};
startServer();
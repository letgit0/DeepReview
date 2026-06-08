import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import aiRoutes from './routes/ai.routes.js';

const app = express();
await connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(express.json());
app.use(cors());

app.use('/api/ai', aiRoutes);

export default app;
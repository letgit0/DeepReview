import express from 'express';
import cors from 'cors';
import aiRoutes from './routes/ai.routes.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(express.json());
app.use(cors());

app.use('/api/ai', aiRoutes);

export default app;
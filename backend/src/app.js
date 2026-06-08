import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import aiRoutes from './routes/ai.routes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
await connectDB();

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/ai', aiRoutes);
app.use('/api/auth', authRoutes);

export default app;
import express from 'express';
import { generateResponse } from '../controllers/groq.js';

const router = express.Router();
router.get('/generate', generateResponse);

export default router;
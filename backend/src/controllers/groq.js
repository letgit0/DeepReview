import { getResponseFromGroq } from '../services/ai.services.js';

export const generateResponse = async (req, res) => {
    const prompt = req.query.prompt;
    if(!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }
    const response = await getResponseFromGroq(prompt);
    res.send( response );
};
import express from 'express';
import { getReview, createReview, getUserReviews, deleteReview } from '../controllers/reviewController.js';

const router = express.Router();

router.post('/', createReview);
router.get('/user', getUserReviews);
router.get('/:id', getReview);
router.delete('/:id', deleteReview);

export default router;
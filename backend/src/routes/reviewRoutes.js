import express from 'express';
import { getReview, createReview, getUserReviews, deleteReview } from '../controllers/reviewController.js';

const router = express.Router();

router.post('/', createReview);
router.get('/:id', getReview);
router.get('/user', getUserReviews);
router.delete('/:id', deleteReview);

export default router;
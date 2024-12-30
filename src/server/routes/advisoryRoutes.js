import express from 'express';
import { getAdvice } from '../controllers/advisoryController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.post('/advice', auth, getAdvice);

export default router;
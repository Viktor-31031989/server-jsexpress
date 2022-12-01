import { Router } from 'express';
import post from './post.js';
const router = Router();

router.post('/', post);

export default router;

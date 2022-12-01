import { Router } from 'express';
import deleteSomething from './delete.js';
const router = Router();

router.delete('/', deleteSomething);

export default router;

import { Router } from 'express';
import userRegister from './userRegister';
import userGetAll from './userGetAll';
import userGetById from './userGetById';
import updateById from './updateById';

const router = Router();

router.post('/', userRegister); //Post localhost:3000/user
router.get('/', userGetAll); // Get localhost:3000/user
router.get('/:userGetId', userGetById); // Get localhost:3000/user
router.patch('/:userGetId', updateById); // Get localhost:3000/user

export default router;

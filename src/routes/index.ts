import { Router } from 'express';

const router = Router();

import bookRouter from './book';
import healthRouter from './health';
import userRouter from './user';

router.use('/books', bookRouter);
router.use('/health', healthRouter);
router.use('/users', userRouter);

export default router;

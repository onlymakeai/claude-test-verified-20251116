import { Router } from 'express';
import { healthRouter } from './health.routes';
import { exampleRouter } from './example.routes';

const router = Router();

// Register route modules
router.use('/health', healthRouter);
router.use('/examples', exampleRouter);

export { router };

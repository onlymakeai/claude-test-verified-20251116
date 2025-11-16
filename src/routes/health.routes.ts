import { Router, Request, Response } from 'express';

const healthRouter = Router();

/**
 * @route   GET /api/v1/health
 * @desc    Health check endpoint
 * @access  Public
 */
healthRouter.get('/', (req: Request, res: Response) => {
  const healthCheck = {
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    version: process.env.npm_package_version || '1.0.0',
    memory: {
      used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
      total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024),
      unit: 'MB'
    }
  };

  res.status(200).json(healthCheck);
});

/**
 * @route   GET /api/v1/health/ready
 * @desc    Readiness check endpoint
 * @access  Public
 */
healthRouter.get('/ready', (req: Request, res: Response) => {
  // Add your readiness checks here (database, external services, etc.)
  res.status(200).json({
    status: 'ready',
    timestamp: new Date().toISOString()
  });
});

/**
 * @route   GET /api/v1/health/live
 * @desc    Liveness check endpoint
 * @access  Public
 */
healthRouter.get('/live', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'alive',
    timestamp: new Date().toISOString()
  });
});

export { healthRouter };

import { Router, Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/AppError';

const exampleRouter = Router();

/**
 * @route   GET /api/v1/examples
 * @desc    Get all examples
 * @access  Public
 */
exampleRouter.get('/', (req: Request, res: Response) => {
  const examples = [
    { id: 1, name: 'Example 1', description: 'First example' },
    { id: 2, name: 'Example 2', description: 'Second example' },
    { id: 3, name: 'Example 3', description: 'Third example' }
  ];

  res.status(200).json({
    success: true,
    count: examples.length,
    data: examples
  });
});

/**
 * @route   GET /api/v1/examples/:id
 * @desc    Get example by ID
 * @access  Public
 */
exampleRouter.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const exampleId = parseInt(id);

  if (isNaN(exampleId)) {
    return next(new AppError('Invalid ID format', 400));
  }

  // Simulate database lookup
  const example = {
    id: exampleId,
    name: `Example ${exampleId}`,
    description: `Description for example ${exampleId}`
  };

  res.status(200).json({
    success: true,
    data: example
  });
});

/**
 * @route   POST /api/v1/examples
 * @desc    Create new example
 * @access  Public
 */
exampleRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return next(new AppError('Name and description are required', 400));
  }

  const newExample = {
    id: Date.now(),
    name,
    description,
    createdAt: new Date().toISOString()
  };

  res.status(201).json({
    success: true,
    message: 'Example created successfully',
    data: newExample
  });
});

export { exampleRouter };

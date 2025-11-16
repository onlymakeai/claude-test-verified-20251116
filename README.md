# Express TypeScript API Server

A simple, production-ready Express.js API server built with TypeScript, featuring health check endpoints, comprehensive error handling, and a well-organized project structure.

## Features

- ✅ **TypeScript** - Type-safe code with full TypeScript support
- ✅ **Express.js** - Fast, minimalist web framework
- ✅ **Error Handling** - Centralized error handling middleware
- ✅ **Health Checks** - Multiple health check endpoints (health, ready, live)
- ✅ **Request Logging** - Built-in request/response logging
- ✅ **Security** - Helmet.js for security headers
- ✅ **CORS** - Cross-Origin Resource Sharing enabled
- ✅ **Environment Variables** - Configuration through .env files
- ✅ **Hot Reload** - Development mode with auto-restart

## Project Structure

```
.
├── src/
│   ├── index.ts              # Application entry point
│   ├── routes/
│   │   ├── index.ts          # Route aggregator
│   │   ├── health.routes.ts  # Health check routes
│   │   └── example.routes.ts # Example API routes
│   ├── middleware/
│   │   ├── errorHandler.ts   # Global error handler
│   │   ├── notFoundHandler.ts# 404 handler
│   │   └── requestLogger.ts  # Request logging
│   ├── utils/
│   │   └── AppError.ts       # Custom error class
│   └── types/
│       └── index.ts          # TypeScript type definitions
├── package.json
├── tsconfig.json
├── .env.example
└── README.md
```

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd express-typescript-api
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:
```env
PORT=3000
NODE_ENV=development
API_VERSION=v1
```

## Usage

### Development Mode
Run the server with hot reload:
```bash
npm run dev
```

### Production Build
Build the TypeScript code:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## API Endpoints

### Health Checks

#### Main Health Check
```
GET /api/v1/health
```
Returns server health status, uptime, memory usage, and version info.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 123.456,
  "environment": "development",
  "version": "1.0.0",
  "memory": {
    "used": 50,
    "total": 100,
    "unit": "MB"
  }
}
```

#### Readiness Check
```
GET /api/v1/health/ready
```
Indicates if the application is ready to accept traffic.

#### Liveness Check
```
GET /api/v1/health/live
```
Indicates if the application is running.

### Example Endpoints

#### Get All Examples
```
GET /api/v1/examples
```

#### Get Example by ID
```
GET /api/v1/examples/:id
```

#### Create Example
```
POST /api/v1/examples
Content-Type: application/json

{
  "name": "Example Name",
  "description": "Example Description"
}
```

## Error Handling

The API uses a centralized error handling system:

- Custom `AppError` class for operational errors
- Global error handler middleware
- Consistent error response format
- Stack traces in development mode

**Error Response Format:**
```json
{
  "success": false,
  "error": {
    "message": "Error description",
    "stack": "..." // Only in development
  }
}
```

## Development

### Adding New Routes

1. Create a new route file in `src/routes/`
2. Import and register it in `src/routes/index.ts`
3. Follow the existing pattern for consistency

### Adding Middleware

1. Create middleware in `src/middleware/`
2. Register in `src/index.ts` or specific routes

### Custom Types

Add TypeScript types in `src/types/index.ts`

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests (when configured)

## Environment Variables

| Variable | Description | Default |
|----------|-------------|----------|
| PORT | Server port | 3000 |
| NODE_ENV | Environment (development/production) | development |
| API_VERSION | API version prefix | v1 |

## Security

- **Helmet.js** - Sets various HTTP headers for security
- **CORS** - Configurable cross-origin resource sharing
- **Input Validation** - Validate and sanitize user inputs
- **Error Handling** - Prevents sensitive data leaks

## Best Practices

- Use TypeScript strict mode
- Follow REST API conventions
- Implement proper error handling
- Use environment variables for configuration
- Log requests and errors appropriately
- Keep dependencies updated

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write/update tests
5. Submit a pull request

## License

MIT

## Support

For issues and questions, please open an issue in the repository.

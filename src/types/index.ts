import { Request } from 'express';

/**
 * Extended Express Request interface for typed requests
 */
export interface TypedRequest<T = any> extends Request {
  body: T;
}

/**
 * API Response interface
 */
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: {
    message: string;
    errors?: any;
  };
}

/**
 * Pagination interface
 */
export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

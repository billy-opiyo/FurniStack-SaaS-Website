import { NextResponse } from 'next/server';

export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  message?: string;
  error?: {
    code: string;
    message: string;
    details?: Record<string, unknown>;
  };
};

export const ok = <T>(data: T, message?: string) =>
  NextResponse.json({
    success: true,
    data,
    message,
  } satisfies ApiResponse<T>);

export const created = <T>(data: T, message?: string) =>
  NextResponse.json(
    {
      success: true,
      data,
      message,
    } satisfies ApiResponse<T>,
    { status: 201 },
  );

export const badRequest = (message: string, details?: Record<string, unknown>) =>
  NextResponse.json(
    {
      success: false,
      error: {
        code: 'BAD_REQUEST',
        message,
        details,
      },
    },
    { status: 400 },
  );

export const unauthorized = (message = 'Unauthorized') =>
  NextResponse.json(
    {
      success: false,
      error: {
        code: 'UNAUTHORIZED',
        message,
      },
    },
    { status: 401 },
  );

export const forbidden = (message = 'Forbidden') =>
  NextResponse.json(
    {
      success: false,
      error: {
        code: 'FORBIDDEN',
        message,
      },
    },
    { status: 403 },
  );

export const notFound = (message: string) =>
  NextResponse.json(
    {
      success: false,
      error: {
        code: 'NOT_FOUND',
        message,
      },
    },
    { status: 404 },
  );

export const serverError = (message = 'Internal server error') =>
  NextResponse.json(
    {
      success: false,
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message,
      },
    },
    { status: 500 },
  );

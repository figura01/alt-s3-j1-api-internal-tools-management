import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import type { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();

    const response = ctx.getResponse<Response>();

    const request = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    if (status === 500) {
      response.status(status).json({
        error: 'Internal server error',

        message:
          exception instanceof Error
            ? exception.message
            : 'Unexpected server error',

        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
      });

      return;
    }

    const exceptionResponse =
      exception instanceof HttpException ? exception.getResponse() : null;

    response.status(status).json({
      ...(typeof exceptionResponse === 'object'
        ? exceptionResponse
        : {
            error: 'Request failed',
            message: String(exceptionResponse),
          }),

      statusCode: status,

      timestamp: new Date().toISOString(),

      path: request.url,
    });
  }
}

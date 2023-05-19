import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as morgan from 'morgan';

import { RequestLoggingService } from './request-logging.service';

@Injectable()
export class RequestLoggingMiddleware implements NestMiddleware {
  constructor(private requestLoggingService: RequestLoggingService) {}

  use(req: Request, res: Response, next: NextFunction) {
    morgan('tiny')(req, res, (err) => {
      if (err) return next(err);

      const message = `${req.method} ${req.originalUrl}`;
      this.requestLoggingService.logRequest(message);
      next();
    });
  }
}

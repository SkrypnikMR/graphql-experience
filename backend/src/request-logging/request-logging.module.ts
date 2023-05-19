import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestLog } from './entities/request-log.entity';
import { RequestLoggingService } from './request-logging.service';

@Module({
  imports: [TypeOrmModule.forFeature([RequestLog]), ConfigModule],
  providers: [RequestLoggingService],
  exports: [RequestLoggingService],
})
export class RequestLoggingModule {}

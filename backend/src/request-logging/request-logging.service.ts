import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RequestLog } from './entities/request-log.entity';
import * as nodemailer from 'nodemailer';
import * as cron from 'node-cron';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RequestLoggingService {
  constructor(
    @InjectRepository(RequestLog)
    private readonly requestLogRepository: Repository<RequestLog>,
    private readonly configService: ConfigService,
  ) {
    const loggingTimeoutMinutes = Number(
      this.configService.get<string>('LOGGING_TIMEOUT'),
    );
    const cronExpression = `*/${loggingTimeoutMinutes} * * * *`;

    cron.schedule(cronExpression, () => {
      this.sendRequestLogsEmail();
    });
  }

  async logRequest(message: string) {
    const log = new RequestLog();
    log.message = message;
    await this.requestLogRepository.save(log);
  }

  async sendRequestLogsEmail() {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.configService.get<string>('EMAIL_USER'),
        pass: this.configService.get<string>('EMAIL_PASSWORD'),
      },
    });

    const logs = await this.requestLogRepository.find();

    if (logs.length) {
      const logsString = logs
        .map((log) => `${log.timestamp}: ${log.message}`)
        .join('\n');

      const mailOptions = {
        from: this.configService.get<string>('EMAIL_USER'),
        to: this.configService.get<string>('EMAIL_RECEIVER'),
        subject: 'skrip-gql-exp request logs',
        text: logsString,
      };
      await transporter.sendMail(mailOptions);
    }

    await this.requestLogRepository.remove(logs);
  }
}

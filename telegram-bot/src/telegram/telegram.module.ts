import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';

import { TelegramService } from './telegram.service';
import { options } from './telegram-config.factory';
import { BooksModule } from '../books/books.module';

@Module({
  imports: [TelegrafModule.forRootAsync(options()), BooksModule],
  providers: [TelegramService],
})
export class TelegramModule {}

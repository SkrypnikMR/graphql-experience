import { ConfigService } from '@nestjs/config';
import { session } from 'telegraf';
import {
  TelegrafModuleAsyncOptions,
  TelegrafModuleOptions,
} from 'nestjs-telegraf';

const sessionMiddleware = session();

const telegrafModuleOptions = (
  config: ConfigService,
): TelegrafModuleOptions => {
  return {
    token: config.get<string>('BOT_TOKEN'),
    middlewares: [sessionMiddleware],
  };
};

export const options = (): TelegrafModuleAsyncOptions => {
  return {
    inject: [ConfigService],
    useFactory: telegrafModuleOptions,
  };
};

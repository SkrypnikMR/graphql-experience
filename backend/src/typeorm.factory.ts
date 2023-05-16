import { ConfigService } from '@nestjs/config';

export const typeormFactory = async (config: ConfigService) => ({
  type: config.get<'spanner'>('TYPEORM_CONNECTION'),
  host: config.get<string>('TYPEORM_HOST'),
  username: config.get<string>('TYPEORM_USERNAME'),
  password: config.get<string>('TYPEORM_PASSWORD'),
  database: config.get<string>('TYPEORM_DB'),
  port: config.get<number>('TYPEORM_PORT'),
  entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  autoLoadEntities: true,
  logging: true,
});

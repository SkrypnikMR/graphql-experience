import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import * as path from 'path';

config({ path: path.resolve(__dirname, '../.env') });

console.log('TYPEORM_HOST', process.env.TYPEORM_HOST);

export default new DataSource({
  type: process.env.TYPEORM_CONNECTION as 'postgres',
  host: process.env.TYPEORM_HOST,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DB,
  port: Number(process.env.TYPEORM_PORT),
  entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: true,
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
});

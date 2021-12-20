import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const ConfigPG: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Jot17321',
  database: 'SUBD_Worker',
  synchronize: true,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
};
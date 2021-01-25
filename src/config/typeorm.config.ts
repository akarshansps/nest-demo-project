import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 4001,
  username: 'postgres',
  password: 'admin',
  database: 'taskmanagement',
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  synchronize: true,
};

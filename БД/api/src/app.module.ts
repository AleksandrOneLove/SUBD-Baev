import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigPG } from './config/orm.config';
import { WorkerModule } from './worker/worker.module';

@Module({
  imports: [WorkerModule, TypeOrmModule.forRoot(ConfigPG)],
  controllers: [],
  providers: [],
  
})
export class AppModule {}

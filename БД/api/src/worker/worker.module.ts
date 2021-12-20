import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Worker } from './entity/worker.entity';
import { WorkerController } from './worker.controller';
import { WorkerService } from './worker.service';

@Module({
  controllers: [WorkerController],
  providers: [WorkerService],
  imports: [TypeOrmModule.forFeature([Worker])]
})
export class WorkerModule {}

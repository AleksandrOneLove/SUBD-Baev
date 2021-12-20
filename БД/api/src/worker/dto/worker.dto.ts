import { Worker } from '../entity/worker.entity';

export class WorkerDto extends Worker {
  readonly firstname: string;
  readonly secondname: string;
  readonly birthday: Date;
  readonly companyName: string;
  readonly position: string;
  readonly applyDate: Date;
}
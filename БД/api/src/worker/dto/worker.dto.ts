import { Worker } from '../entity/worker.entity';

export class WorkerDto extends Worker {
  readonly firstname: string;
  readonly secondname: string;
  readonly birthday: string;
  readonly companyName: string;
  readonly position: string;
  readonly applyDate: string;
}

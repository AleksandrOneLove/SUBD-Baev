import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkerDto } from './dto/worker.dto';
import { EditPostDto } from './dto/workerUpd.dto';
import { Worker } from './entity/worker.entity';

@Injectable()
export class WorkerService {
  constructor(
    @InjectRepository(Worker) private workerRepository: Repository<Worker>,
  ) {}

  async getAll(): Promise<Worker[]> {
    return await this.workerRepository.find();
  }

  async getById(id: string): Promise<Worker> {
    return await this.workerRepository.findOne(id);
  }

  async create(studentDto: WorkerDto): Promise<Worker> {
    const newStudent = this.workerRepository.create(studentDto);

    return this.workerRepository.save(newStudent);
  }

  async update(studentDto: EditPostDto): Promise<Worker> {
    return this.workerRepository.save(studentDto);
  }

  async remove(id: number): Promise<void> {
    await this.workerRepository.delete(id);
  }
}
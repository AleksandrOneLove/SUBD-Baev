import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { WorkerDto } from './dto/worker.dto';
  import { EditPostDto } from './dto/workerUpd.dto';
  import { WorkerService } from './worker.service';
  
  @Controller('worker')
  export class WorkerController {
    constructor(private readonly workerService: WorkerService) {}
  
    @Get()
    async getAll() {
      return this.workerService.getAll();
    }
  
    @Get(':id')
    async getById(@Param('id') id: string) {
      return this.workerService.getById(id);
    }
  
    @Post()
    async create(@Body() workerDto: WorkerDto) {
      return this.workerService.create(workerDto);
    }
  
    @Put()
    async update(@Body() workerDto: EditPostDto) {
      return this.workerService.update(workerDto);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: number) {
      return this.workerService.remove(id);
    }
  }
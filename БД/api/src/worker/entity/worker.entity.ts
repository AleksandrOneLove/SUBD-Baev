import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity()
  export class Worker {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    firstname: string;
  
    @Column()
    secondname: string;
  
    @Column()
    birthday: Date;
  
    @Column()
    companyName: string;
  
    @Column()
    position: string;
  
    @CreateDateColumn()
    applyDate!: Date;
  }
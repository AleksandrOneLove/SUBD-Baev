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
  
    @Column({ type: 'date' })
    birthday: Date;
  
    @Column()
    companyName: string;
  
    @Column()
    position: string;
  
    @CreateDateColumn({ type: 'date' })
    applyDate!: Date;
  }

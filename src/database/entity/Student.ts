import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Class from "./Class";

@Entity('students')
export default class Student {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 45 })
  name: string

  @Column({ length: 45 })
  key: string

  @ManyToMany(() => Class, classe => classe.students)
  classes: Class[]

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date
}
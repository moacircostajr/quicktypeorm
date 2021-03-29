import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import Lesson from './lesson'
import Student from './student'

@Entity('classes')
export default class Class {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 255 })
  name: string

  @Column()
  duration: number

  @OneToMany(type => Lesson, classe => Class)
  lessons: Lesson[]

  @ManyToMany(() => Student, student => student.classes)
  @JoinTable()
  students: Student[]

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date
}

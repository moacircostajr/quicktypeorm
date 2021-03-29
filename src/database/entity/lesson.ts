import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import Class from './class'
import Content from './content'

@Entity('lessons')
export default class Lesson {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 255 })
  description: string

  @OneToOne(type => Content, lesson => Lesson)
  content: Content

  @ManyToOne(type => Class, lessons => Lesson, { eager: true })
  classe: Class

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date
}

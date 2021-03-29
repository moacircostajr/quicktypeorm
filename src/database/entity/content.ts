import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import Lesson from './lesson'

@Entity('contents')
export default class Content {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 255 })
  description: string

  @Column({ length: 255 })
  link_content: string

  @OneToOne(type => Lesson, content => Content)
  @JoinColumn()
  lesson: Lesson

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date
}

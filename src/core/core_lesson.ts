import { getRepository } from 'typeorm'
import Lesson from '../database/entity/lesson'
import { catchCoreError } from '../middlewares/error'

export default class CoreLesson {
  public async create(newLesson: Lesson) {
    const repo = getRepository(Lesson)
    return await catchCoreError(() => repo.save(newLesson))
  }

  public async list() {
    const repo = getRepository(Lesson)
    return await catchCoreError(() => repo.find())
  }
}

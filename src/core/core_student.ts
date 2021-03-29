import { getRepository } from 'typeorm'
import Student from '../database/entity/student'
import { catchCoreError } from '../middlewares/error'

export default class CoreStudent {
  public async create(newStudent: Student) {
    const repo = getRepository(Student)
    return await catchCoreError(() => repo.save(newStudent))
  }

  public async list() {
    const repo = getRepository(Student)
    return await catchCoreError(() => repo.find())
  }

  public async search(name: string) {
    const repo = getRepository(Student)
    return await catchCoreError(() =>
      repo.find({
        where: {
          name: name
        }
      })
    )
  }
}

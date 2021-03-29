import { EntityRepository, Repository } from 'typeorm'
import Class from '../database/entity/class'

@EntityRepository(Class)
export default class ClassRepository extends Repository<Class> {
  public async findByDuration(duration: number): Promise<Class[]> {
    return this.createQueryBuilder('class').where('class.duration = :duration', { duration: duration }).getMany()
  }
}

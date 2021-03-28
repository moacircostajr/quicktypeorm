import { getCustomRepository, getRepository } from "typeorm";
import Class from "../database/entity/Class";
import { catchCoreError } from "../middlewares/error";
import ClassRepository from "../repositories/ClassRepository";

export default class CoreClass {

  public async create(newClass: Class) {
    const repo = getRepository(Class)
    return await catchCoreError(() => repo.save(newClass))
  }

  public async list() {
    const repo = getRepository(Class)
    return await catchCoreError(() => repo.find())
  }

  public async search(name: string) {
    const repo = getRepository(Class)
    return await catchCoreError(() => repo.find({
      where: {
        name: name
      }
    }))
  }

  public async findByDuration(duration: number) {
    const repo = getCustomRepository(ClassRepository)
    return await catchCoreError(() => repo.findByDuration(duration))
  }
}
import { getRepository } from "typeorm";
import Content from "../database/entity/Content";
import { catchCoreError } from "../middlewares/error";

export default class CoreContent {

  public async create(newContent: Content) {
    const repo = getRepository(Content)
    return await catchCoreError(() => repo.save(newContent))
  }

  public async list() {
    const repo = getRepository(Content)
    return await catchCoreError(() => repo.find())
  }

}
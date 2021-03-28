import { Router } from "express";
import Factory from "../factory";
import 'express-async-errors'
import { errorHandler } from "../middlewares/error";
import CoreContent from "../core/CoreContent";
import Content from "../database/entity/Content";

const contentRouter = Router()

const coreContent: CoreContent = Factory.getNewCoreContent()

contentRouter.post('/create', async (request, response) => {
  const newContent: Content = request.body
  const result = await coreContent.create(newContent)

  if (result instanceof Error) {
    return errorHandler(result, request, response, null)
  }
  return response.status(201).json(result)

})

contentRouter.get('/', async (request, response) => {
  const result = await coreContent.list()

  if (result instanceof Error) {
    return errorHandler(result, request, response, null)
  }
  return response.status(200).json(result)

})

export default contentRouter
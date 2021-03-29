import { Router } from 'express'
import CoreClass from '../core/core_class'
import Class from '../database/entity/class'
import Factory from '../factory'
import 'express-async-errors'
import { errorHandler } from '../middlewares/error'

const classRouter = Router()

const coreClass: CoreClass = Factory.getNewCoreClass()

classRouter.post('/create', async (request, response) => {
  const newClass: Class = request.body
  const result = await coreClass.create(newClass)

  if (result instanceof Error) {
    return errorHandler(result, request, response, null)
  }
  return response.status(201).json(result)
})

classRouter.get('/', async (request, response) => {
  const { duration } = request.query
  const result = duration ? await coreClass.findByDuration(Number(duration)) : await coreClass.list()

  if (result instanceof Error) {
    return errorHandler(result, request, response, null)
  }
  return response.status(200).json(result)
})

classRouter.get('/:name', async (request, response) => {
  const { name } = request.params
  const result = await coreClass.search(name)

  if (result instanceof Error) {
    return errorHandler(result, request, response, null)
  }
  return response.status(200).json(result)
})

export default classRouter

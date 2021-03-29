import { Router } from 'express'
import Factory from '../factory'
import 'express-async-errors'
import { errorHandler } from '../middlewares/error'
import CoreLesson from '../core/core_lesson'
import Lesson from '../database/entity/lesson'

const lessonRouter = Router()

const coreLesson: CoreLesson = Factory.getNewCoreLesson()

lessonRouter.post('/create', async (request, response) => {
  const newLesson: Lesson = request.body
  const result = await coreLesson.create(newLesson)

  if (result instanceof Error) {
    return errorHandler(result, request, response, null)
  }
  return response.status(201).json(result)
})

lessonRouter.get('/', async (request, response) => {
  const result = await coreLesson.list()

  if (result instanceof Error) {
    return errorHandler(result, request, response, null)
  }
  return response.status(200).json(result)
})

export default lessonRouter

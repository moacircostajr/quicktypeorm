import { Router } from "express"
import CoreStudent from "../core/CoreStudent"
import Student from "../database/entity/Student"
import Factory from "../factory"
import 'express-async-errors'
import { errorHandler } from "../middlewares/error"

const studentRouter = Router()

const coreStudent: CoreStudent = Factory.getNewCoreStudent()

studentRouter.post('/create', async (request, response) => {
  const newStudent: Student = request.body
  const result = await coreStudent.create(newStudent)

  if (result instanceof Error) {
    return errorHandler(result, request, response, null)
  }
  return response.status(201).json(result)

})


studentRouter.get('/', async (request, response) => {
  const result = await coreStudent.list()

  if (result instanceof Error) {
    return errorHandler(result, request, response, null)
  }
  return response.status(200).json(result)

})


export default studentRouter
import { ErrorRequestHandler } from 'express'
import { getRepository } from 'typeorm'
// import { ValidationError } from 'yup'
/*
interface ValidationErrors {
  [key: string]: string[]
}
 */
const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  /*   if (error instanceof ValidationError) {
      let errors: ValidationErrors = {}
      error.inner.forEach(err => {
        errors[err.path] = err.errors
      })
      return response.status(400).json({ message: 'Validation fails', errors })
    } */
  console.error(error)
  return response.status(500).json({ message: 'Internal Server Error' })
}

const catchCoreError = async (callback: any): Promise<any> => {
  try {

    return await callback()

  } catch (err) {
    return new Error(err.message)
  }
}

export { errorHandler, catchCoreError }
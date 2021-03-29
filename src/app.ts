import express from 'express'
import 'reflect-metadata'
import './database/connection'
import { errorHandler } from './middlewares/error'
import studentRouter from './routes/student_router'
import classRouter from './routes/class_router'
import lessonRouter from './routes/lesson_router'
import contentRouter from './routes/content_router'

const app = express()
app.use(express.json())

app.use('/student', studentRouter)
app.use('/class', classRouter)
app.use('/lesson', lessonRouter)
app.use('/content', contentRouter)

app.use(errorHandler)

export default app

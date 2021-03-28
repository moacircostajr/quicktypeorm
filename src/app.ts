import express from 'express'
import 'reflect-metadata'
import './database/connection'
import { errorHandler } from './middlewares/error'
import studentRouter from './routes/StudentRouter'
import classRouter from './routes/ClassRouter'
import lessonRouter from './routes/LessonRouter'
import contentRouter from './routes/ContentRouter'

const app = express()
app.use(express.json())

app.use('/student', studentRouter)
app.use('/class', classRouter)
app.use('/lesson', lessonRouter)
app.use('/content', contentRouter)

app.use(errorHandler)

export default app

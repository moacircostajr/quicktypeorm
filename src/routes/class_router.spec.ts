import app from '../app'
const request = require('supertest')
import { createConnection } from 'typeorm'

describe('Class Route', () => {
  beforeAll(async () => {
    await createConnection()
  })

  test('if it can create a Class', async () => {
    const result = await request(app)
      .post('/class/create')
      .send({
        name: 'Matematica',
        duration: '30'
      })
      .set({ 'Content-Type': 'application/json' })
      .expect(201)
      .expect(response => {
        response.body.name = 'Matematica'
        response.body.duration = 30
        response.body.id = true
        response.body.createdAt = true
        response.body.updatedAt = true
      })
  })
})

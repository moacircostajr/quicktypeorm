import app from '../app'
const request = require('supertest')
import { Connection, createConnection } from 'typeorm'

describe('Class Route', () => {
  let connection: Connection = null

  beforeAll(async () => {
    connection = await createConnection()
  })

  afterAll(async () => {
    await connection.close()
  })

  it('should can create a Class', async () => {
    const result = await request(app)
      .post('/class/create')
      .send({
        name: 'Matematica',
        duration: '30'
      })
      .set({ 'Content-Type': 'application/json' })
    expect(result.statusCode).toBe(201)
    expect(result.body.name).toBe('Matematica')
    expect(result.body.duration).toBe('30')
    expect(result.body.id).toBeTruthy()
    expect(result.body.createdAt).toBeTruthy()
    expect(result.body.updatedAt).toBeTruthy()
  })

  it('should can list Classes', async () => {
    const result = await request(app).get('/class')
    expect(result.statusCode).toBe(200)
    expect(result.body.length).toBeGreaterThanOrEqual(1)
    expect(result.body[0].id).toBeTruthy()
    expect(result.body[0].createdAt).toBeTruthy()
    expect(result.body[0].updatedAt).toBeTruthy()
  })
})

const request = require('supertest')
const app = require('../index')
const connectDB = require ("./connectDB/connect")
describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    connectDB()
    const res = await request(app)
      .get('/test')
      expect(res.statusCode).toEqual(200)
      expect(res.text).toEqual("hello world!!")
  })
})
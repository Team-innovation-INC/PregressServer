const request = require("supertest");
const app = require("../../index");
const mongoDB = require("../connectDB")
describe("Test the root path", () => {
// --- before every test
  beforeAll(() => {
    mongoDB.connect();
  });
// --- after each test
  afterAll((done) => {
    mongoDB.disconnect(done);
  });
// --- test for routes "/test"
  test("It should response the GET method", (done) => {
    request(app)
      .get("/test")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("hello world!!")
        done();
      });
  });
});
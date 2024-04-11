const request = require("supertest");
const {connect, disconnect} = require("./config/connectDB")
const app = require("../index")
let server;

beforeAll(async () => {
    await connect();
    server = app.listen(5000);
  });

  afterAll(async () => {
    await disconnect();
    server.close();
  });
  
  describe("Test the root path", () => {
    test("It should response the GET method for test route server", done => {
      request(app)
        .get("/test")
        .then(response => {
          expect(response.statusCode).toBe(200);
          expect(response.text).toBe("progress server health care work as expected");
          done();
        });
    });
  });


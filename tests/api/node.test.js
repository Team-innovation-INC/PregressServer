const request = require("supertest");
const app = require("../../index")
const {connect, disconnect} = require("../config/connectDB")

let server; // Define a variable to hold the server instance

beforeAll(async () => {
    await connect();
    server = app.listen(5000); // Start the server and store the server instance

  });

  afterAll(async () => {
    await disconnect();
    server.close(); // Stop the server after all tests have run
  });
  
  describe("Test the root path", () => {
    test("It should response the GET method", done => {
      request(app)
        .get("/api/auth/test")
        .then(response => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
  });


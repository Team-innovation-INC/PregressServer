const { connect, disconnect } = require('./connectDB');
const app = require("../../")
let server;

beforeAll(async () => {
  await connect();
  console.log("passed here ......")
  server = app.listen(5000);
});

afterAll(async () => {
  await disconnect();
  console.log("passed here ......")
  server.close();
});

module.exports = {
  server,
  connect,
  disconnect,
};
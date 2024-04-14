// server.js
const connectdb = require('./config/mongoDB_connect.config');
const app = require('./index');

const port = 5000;

// server connect
app.listen(port || 5000, err =>
  err ? console.error(err) : console.info(`server listening on port ${port}!`),
);

// ---- database function imports

// ---- database function execute
connectdb();

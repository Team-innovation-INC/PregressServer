// require const for this file:
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const port = 5000;

////////////////////////////////////////////////////
//////////middleware global for all routes//////////
////////////////////////////////////////////////////

// jason middleware for json
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
// middelwares cors
const cors = require("cors");
var corsOptions = {
  origin:  ["http://localhost:3000", "http://localhost:5000", '*'],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// connect to dataBase
const connectdb = require("./config/mongoDB_connect");
connectdb();

///////////////////////////////////////////////////
/////////////////////ROUTES////////////////////////
///////////////////////////////////////////////////

// Test router
app.get("/test", (req, res) => {
  res.status(200).send("test progress page");
});
app.post("/test", (req, res) => {
  try {
    res.status(200).send(req.body);
  } catch (error) {
    res.status(400).send("error", error)
  }
});

// router for client routes
const ClientRoutes = require("./routes/user.routes");
app.use("/api/client", ClientRoutes);

//server connect
app.listen(port || 5000, (err) =>
  err ? console.log(err) : console.log(`server listening on port ${port}!`)
);
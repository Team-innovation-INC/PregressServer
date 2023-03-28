// require const for this file:
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const port = 5000;
const socket = require("socket.io");

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

// router for client route
const ClientRoutes = require("./routes/user.routes");
app.use("/api/client", ClientRoutes);

// router for messages route
const MessagesRoutes = require("./routes/messages.routes")
app.use("/api/message", MessagesRoutes)

// router for messages route
const EmailsRoutes = require("./routes/email.routes")
app.use("/api/email", EmailsRoutes)


//server connect
let server = app.listen(port || 5000, (err) =>
  err ? console.error(err) : console.info(`server listening on port ${port}!`)
);

const io = socket(server, {
  pingTimeout: 6000,
  cors: {
    "Access-Control-Allow-Origin": "*",
    origin: "https://messanger-beryl.vercel.app",
    // credentials: true,
  },
});
io.on("connection", (socket) => {
  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
  });

  socket.on("new message", (recievedMessage) => {
    var chat = recievedMessage.chat;
    chat.users.forEach((user) => {
      if (user == recievedMessage.sender._id) return;
      socket.in(user).emit("message recieved", recievedMessage);
    });
  });

  socket.off("setup", () => {
    socket.leave(userData._id);
  });
});

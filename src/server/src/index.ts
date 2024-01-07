const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
import { Server } from "socket.io";

console.log("Starting server...");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

server.listen(4000, () => {
  console.log("Server is listening on port 4000");
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`user with id ${socket.id} joined room ${data}`);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("send", (msg) => {
    console.log(
      `message: ${msg.content} from ${socket.id} in room ${msg.room}`
    );
    io.to(msg.room).emit("receive", msg);
  });
});

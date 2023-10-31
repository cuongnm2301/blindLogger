const express = require("express");
const app = express();
const port = 3000;
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const { networkInterfaces } = require("os");
const nets = networkInterfaces();
let host = "localhost";

console.log(nets);

if (nets.en0) {
  for (const net of nets.en0) {
    if (net.family === "IPv4" && !net.internal) {
      host = net.address;
      break;
    }
  }
}

const PORT = 3000;

io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    console.log("logger disconnected");
  });
});

app.use(express.static("public"));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post("/log", (req, res) => {
  const time = req.body;
  const value = req.body;
  io.emit("ota-log", req.body);
  res.status(200);
  res.send();
});

server.listen(PORT, () => {
  console.log(`listening on ${host}:${PORT}`);
});

const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

//Aplicación express
const app = express();
app.use(index);

const server = http.createServer(app);

//Crea el servidor de sockets
const io = socketIo(server);

let interval;

io.on("connection", (socket) => {
  console.log("Se ha conectado un cliente nuevo");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Se ha desconectado un cliente");
    clearInterval(interval);
  });
});

const getApiAndEmit = socket => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("DesdeLaAPI", response);
};

server.listen(port, () => console.log(`Escuchando en el puerto ${port}`));
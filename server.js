const express = require("express");
const usersRouter = require("./users/userRouter");
const server = express();

// middleware
server.use(logger);

// place middleware
server.use(express.json());

// endpoints
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(`${req.method} request to ${req.originalUrl}`);

  next();
}

module.exports = server;

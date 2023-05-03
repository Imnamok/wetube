import express from "express";

const PORT = 4000;

const app = express();

const routerLogger = (req, res, next) => {
  console.log("Path :", req.path);
  next();
};

const methodLogger = (req, res, next) => {
  console.log("Method :", req.method);
  next();
};

const home = (req, res, next) => {
  console.log("I will respond.");
  return res.send("hello");
};

const login = (req, res) => {
  return res.send("login");
};

app.use(methodLogger, routerLogger);
app.get("/", home);
app.get("/login", login);

const handleListening = () => console.log(`Server listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);

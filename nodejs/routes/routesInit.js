const indexR = require("./index");
const usersR = require("./users");
const foodsR = require("./foods");
const studentsR = require('./students');

exports.routesInit = (app) => {
  app.use("/",indexR);
  app.use("/users",usersR);
  app.use("/foods",foodsR);
  app.use("/students",studentsR)
}
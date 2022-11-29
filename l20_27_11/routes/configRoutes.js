const indexR = require("./index");
const usersR = require("./users");
const foodsR = require("./foods");
const categoriesR = require("./categories");

exports.routesInit = (app) => {
  app.use("/",indexR);
  app.use("/users",usersR);
  app.use("/foods",foodsR);
  app.use("/categories",categoriesR);

// כל ראוט אחר שנגיע שלא קיים בתקיית פאליק או כראוט
// נקבל 404
  app.use("*",(req,res) => {
    res.status(404).json({msg:"endpoint not found , 404",error:404})
  })
}
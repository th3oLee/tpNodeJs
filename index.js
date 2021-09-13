const express = require("express");
const app = express();
const indexRouter = require("./routers/index");

const db = require("./models");

(async () => {
  await db.sequelize.sync();
})();

app.use(express.json());
app.use("/", indexRouter);

app.listen(process.env.PORT || "3000", () => {
  console.log("Le serveur est à l’écoute sur le port 3000");
});

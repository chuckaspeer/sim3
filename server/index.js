require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./controller");
const massive = require("massive");
const session = require("express-session");

const app = express();

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  
  })
);

app.use(bodyParser.json());

app.post("/api/auth/register", controller.register);
app.get("/api/auth/login/:username/:password", controller.login);
app.post("/api/auth/logout", controller.logout);
app.get("/api/posts", controller.getAll);
app.get("/api/onepost/:id", controller.getOne);
app.post('/api/post',controller.createPost)
app.delete('/api/post/delete/:id',controller.deletePost)

const port = process.env.Port || 3005;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});

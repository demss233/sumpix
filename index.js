require("dotenv").config();
const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
const summarise = require("./summarize");
const mongoose = require("mongoose");
const note = require("./schema/note");

const database_url = process.env.password;

const connection_parameters = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(database_url, connection_parameters).then(() => {
  console.table(["database", "connected"]);
});

app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (request, response) => {
  response.render("home");
});

app.get("/show/:mongoid", async (request, response) => {
  const Note = await note.findOne({ _id: request.params.mongoid });
  // response.send(Note.name + Note.title);
  response.render("article", { obj: Note });
});

app.get("/docs", (request, response) => {
  response.render("docs");
});

app.post("/render", async (request, response) => {
  let summarised = summarise(
    request.body.paragraph,
    parseInt(request.body.points)
  );
  // console.log(summarised);
  let ret = "";
  let query = request.body.keywords.split(" ");
  for (let i = 0; i < query.length; ++i) {
    let unsplash = `https://source.unsplash.com/random/700x500/?${query[i]}`;
    if (i == 0) ret += unsplash;
    else ret += " " + unsplash;
  }
  // console.log(ret);
  let Note = new note({
    name: request.body.name,
    title: request.body.title,
    keywords: request.body.keywords,
    para: summarised,
    images: ret,
  });
  try {
    Note = await Note.save();
    response.redirect(`/show/${Note.id}`);
  } catch (error) {
    console.log(error);
  }
});

app.get("/create", (request, response) => {
  response.render("create");
});

app.listen(port, () => {
  console.log("LIVE");
});

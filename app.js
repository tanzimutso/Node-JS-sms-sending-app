const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const Nexmo = require("nexmo");
const Socketio = require("socket.io");

const nexmo = new Nexmo(
  {
    apiKey: "57aea764",
    apiSecret: "3oCT9pnn1qYJfmC9"
  },
  {
    debug: true
  }
);

const app = express();

app.set("view engine", "html");
app.engine("html", ejs.renderFile);

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const number = req.body.number;
  const text = req.body.text;

  nexmo.message.sendSms(
    "NEXMO",
    number,
    text,
    { type: "unicode" },
    (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        console.dir(responseData);
      }
    }
  );
}); 

const port = 3000;

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});

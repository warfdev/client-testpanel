const express = require("express");
const bodyParser = require("body-parser");

class FGPanel {
  constructor(options) {
    this.client = options.client;
    this.passwords = options.passwords;
  }

  checkPassword(password) {
    return this.passwords.includes(password);
  }

  start(port) {
    const app = express();

    app.use(bodyParser.urlencoded({ extended: true }));


    app.get("/", (req, res) => {
      res.redirect("/login");
    });


    app.get("/login", (req, res) => {
      res.sendFile(__dirname + "/pages/login.html");
    });


    app.post("/login", (req, res) => {
      const password = req.body.password;

      if (this.checkPassword(password)) {
        res.redirect("/homepage");
      } else {
        //res.send("HatalÄ± Åifre, tekrar deneyin.");
        res.redirect("/login");
      }
    });
    
    app.get("/homepage", (req, res) => {
      res.sendFile(__dirname + "/pages/homepage.html");
    })

    app.listen(port, () => {
      console.log("FGPanel is running on port " + port);
    });
  }
}

module.exports = FGPanel;
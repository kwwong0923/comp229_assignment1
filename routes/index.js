let express = require("express");
let router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Homepage" });
});

router.get("/home", (req, res) => {
  res.render("index", { title: "Homepage" });
});

router.get("/about", (req, res) => {
  res.render("index", { title: "About Me" });
});

router.get("/projects", (req, res) => {
  res.render("index", { title: "Projects Page" });
});

router.get("/services", (req, res) => {
  res.render("index", { title: "Services Page" });
});

router.get("/contact", (req, res) => {
  res.render("index", { title: "Contact Me" });
});

module.exports = router;

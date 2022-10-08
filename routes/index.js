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

router.get("/respone", (req, res) => {
  let { fullname, age, email, message, phone } = req.query;
  console.log(`${fullname}, ${age}, ${email}, ${phone}, ${message}`);
  res.render("index", { title: "Homepage" });
});

module.exports = router;

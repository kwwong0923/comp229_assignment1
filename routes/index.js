let express = require("express");
let router = express.Router();
let alert = require("alert");
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
  let { fullname } = req.query;
  console.log(`Thanks ${fullname} for contact me.`);
  alert(`Thanks ${fullname} for contact me.`);
  res.render("index", { title: "Homepage" });
});

module.exports = router;

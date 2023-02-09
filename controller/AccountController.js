var connect = require("../db/connectDB");
class AccountController {
  getHome = async (req, res) => {
    res.render("home", { title: "Home" });
  };
  getLayout = async (req, res) => {
    res.render("layout", { title: "Layout" });
  };
  getSignup = async (req, res) => {
    res.render("signup", { title: "Signup" });
  };
  getLogin = async (req, res) => {
    res.render("login", { title: "Admin hello" });
  };

  postSignup = async (req, res) => {
    const { email, password, comfirmpassword } = req.body;
    console.log("req.body", req.body);
    return res.redirect("/layout");
  };

  postLogin = async (req, res) => {
    const { email, password } = req?.body;
    
    if (!email || !password) return res.redirect("/login");
    try {
      connect.query(
        "SELECT * FROM account WHERE email=? AND password=?",
        [email, password],
        function (err, data) {
          if (err || data.length == 0) {
            if (err === null) return res.redirect("/login");
          } else {
            if (data === null) return res.redirect("/login");
            return res.redirect("/");
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = new AccountController();

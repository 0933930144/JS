const connect = require("../db/connectDB");
const Account = require("../model/account")
class AccountController {
  getHome = async (req, res) => {
    res.render("home/home", { title: "Home" });
  };
  getLayout = async (req, res) => {
    res.render("layout", { title: "Layout" });
  };
  getSignup = async (req, res) => {
    res.render("signup", { title: "Signup", layout: false });
  };
  getLogin = async (req, res) => {
    res.render("login", { title: "Admin hello", layout: false });
  };

  postSignup = async (req, res) => {
    const { email, password, comfirmpassword } = req.body;
    return res.redirect("/layout");
  };

  postLogin = async (req, res) => {
    const { email, password } = req?.body;
    
    if (!email || !password) return res.redirect("/login");
    try {
      Account.findByEmail(email, (error, result) => {
        if (error) return res.redirect("/login");
        else {
          if(password === result?.[0]?.password) {
            return res.redirect("/")
          } else {
             return res.redirect("/login");
          }
        }
      }); 
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = new AccountController();

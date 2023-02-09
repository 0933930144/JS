class AccountController {
    getHome = async (req, res) => {
        res.render("home", { title: "Home" });
    }
    getLayout = async (req, res) => {
        res.render("layout",{title:"Layout"});
    }
    getSingup = async(req, res) =>{
        res.render("signup",{title:"Signup"})
        
    }
    getLogin = async (req, res) => {
        res.render("login", { title: "Admin hello" });
    }
    postSignup = async (req, res)=>{
        const {email, password, comfirmpassword} = req.body;
        return res.redirect("/layout");
    }
    postLogin = async (req, res) => {
        const { email, password } = req.body;
        const admin = {
            email: "admin@gmail.com",
            password: "123456"
        }
        try {
            if (email === admin.email || password === admin.password)
                return res.redirect("/");
        }
        catch (error) {
            console.log(error);
        }
    }
}
module.exports = new AccountController();
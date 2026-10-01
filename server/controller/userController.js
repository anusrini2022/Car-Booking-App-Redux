const service = require("../service/userService");
const hashPassword = require("../middleware/passwordHashing")

const createUser = async (req, res) => {
    try {
        const user = req.body;
        console.log("User:", user);
        const userDetails = await service.createUser(user);
        res.status(200).json(userDetails);
    } catch (error) {
        res.json({
            error: error.message

        });
    }
}

const findUser = async (req, res) => {
    try {
        const userdata = req.body;
        const userName = userdata.userName;
        const user = await service.findUser(userName);
        console.log("user:", user);
        console.log("userData:", userdata);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        else {

            if (user) {
                let passwordMatch = await hashPassword.comparePassword(userdata.password, user.password)
                if (passwordMatch){
                     if (user.type == "admin") {
                        console.log("Admin")
                        return res.status(200).json({ "msg": "Admin Dashboard" })
                    }
                    else  if (user.type == "customer"){
                        console.log("customer")
                        return res.status(200).json({ "msg": "customer Dashboard" })

                    }
                }
                else{
                    console.log("Invalid  password")
                }
            }
            else
                return res.status(200).json({ "msg": "Invalid UserName or Password" })

        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const findUsers = async (req, res) => {
    try {
        const users = await service.findAllUsers();
        res.json(users);
    }
    catch (error) {
        res.json({ msg: "Error in fetching Users" + error.message })
    }
}

module.exports = { createUser, findUser, findUsers }
const repository = require("../repository/UserRepoistory");
const hashPassword = require("../middleware/passwordHashing")
const createUser = async (user) => {
    const userExists = await repository.findUser(user.userName)
    if (userExists)
        return "User Already exists"
    else {

        user.password = await hashPassword.convertPassword(user.password)
        const userData = await repository.createUser(user);
        return "User Created Successfully"
    }
}

const findUser = async (email) => {
        return await repository.findUser(email)
}
const findAllUsers=async()=>{
    return await repository.findAllUsers();
}
module.exports = { createUser, findUser,findAllUsers }

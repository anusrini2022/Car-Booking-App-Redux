const controller=require("../controller/userController");
const express=require("express");

const router=express.Router();

router.post("/signup",controller.createUser);
router.post("/finduserbyemailId",controller.findUser);
router.get("/showUsers",controller.findUsers)
module.exports=router;
const express = require("express");
const app = express();
const carbookingRoutes = require("./routes/carBookingRoutes");
const connectDB = require("./config/dbconfig");
const cors = require("cors")
const port = process.env.PORT || 3000;
const carListsRoutes = require("./routes/carListsRoutes");
const userRoutes = require("./routes/userRoutes");
const path = require("path");
const repository = require("./repository/UserRepoistory");
const hashPassword=require("./middleware/passwordHashing")

// middleware
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use("/CarBooking", carbookingRoutes);
app.use("/CarBooking/CarLists", carListsRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/users", userRoutes);

const adminUser = async () => {
    const user = { "name":"Raj","contactNo":9900764321, "userName": "admin@gmail.com", "password": "admin@123", "type": "admin" }

    const adminExsits = await repository.findUser(user.userName)
    if (adminExsits) {
        console.log("AdminUser already created")
    }
    else {
        user.password=await hashPassword.convertPassword(user.password)
        const admin = await repository.createUser(user);
        console.log("Admin User Created")
    }
}
connectDB();
adminUser();


app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});


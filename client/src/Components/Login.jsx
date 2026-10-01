import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../slice/UserSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../login.css";

const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("customer");
    const dispatch = useDispatch();
    const loadingVal = useSelector((gs) => gs.userReducer.loading);
    const messageVal = useSelector((gs) => gs.userReducer.message);
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        const userData = { userName, password, type }
        if (!userName || !password) {
            alert("Please enter username and password");
            return;
        }

        try {
            const result = await dispatch(loginUser(userData));
            if (loginUser.fulfilled.match(result)) {
                const responseMessage = (
                    result.payload?.msg || result.payload?.message || ""
                ).trim().toLowerCase();

                sessionStorage.setItem("userLoggedIn", userName);

                if (responseMessage === "admin dashboard") {
                    sessionStorage.setItem("userLoggedIn", userName);
                    navigate("/admindashboard");

                } else if (responseMessage === "customer dashboard") {
                    sessionStorage.setItem("userLoggedIn", userName);
                    navigate("/customerdashboard");
                } else {
                    sessionStorage.removeItem("userLoggedIn");
                    alert("Invalid username or password");
                }
            } else {
                alert(result.payload || "Invalid username or password");
            }

            
        } catch (error) {
            alert(error.message || "Login failed");
        }

        setUserName("");
        setPassword("");
        setType("customer");
    }
    const clearVal = () => {
        setUserName("");
        setPassword("");
        setType("customer");
    }
    return (
        <div className="login">
            <h3>Login </h3>
            <form onSubmit={login} className="login-form">
                <label>UserName</label>
                <input type="email" name={userName}
                    value={userName} onChange={(e) => setUserName(e.target.value)}
                    required></input>
                <label>Password</label>
                <input type="password" name={userName}
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    required></input>
                <label>Select Type:</label>
                <select name="type" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                </select>
                <input type="submit" value="Login">
                </input>
                <input type="reset" value="Clear" onClick={clearVal} />
                {loadingVal && <p>Loading...</p>}

                <h3> Dont Have an account?<Link className="add-btn" to="/signup">SignUp</Link> </h3>
            </form>
        </div>
    )
}

export default Login;
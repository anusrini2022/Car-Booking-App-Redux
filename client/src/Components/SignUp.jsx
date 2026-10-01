import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createUser } from "../slice/UserSlice";
import "../login.css"
const SignUp = () => {
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [contactNo, setContactNo] = useState("");
    const dispatch = useDispatch();

    const loadingVal = useSelector((gs) => gs.userReducer.loading);
    const messageVal = useSelector((gs) => gs.userReducer.message);


    const signUp = (e) => {
        e.preventDefault();
        let user = { name,contactNo,userName, password };
        console.log(user);
        dispatch(createUser(user))
        setUserName("");
        setPassword("");
        setName("");
        setContactNo("");

    }
    const clearVal = () => {
        setUserName("");
        setPassword("");
        setContactNo("");
    }
    return (
        <div className="login">
            <h3>SignUp Page</h3>
            <form onSubmit={signUp} className="login-form">
                 <label>Name</label>
                <input type="text" name={name}
                    value={name} onChange={(e) => setName(e.target.value)}
                    required></input>
                <label>ContactNo</label>
                <input type="text" name={contactNo}
                    value={contactNo} onChange={(e) => setContactNo(e.target.value)}
                    required></input>

                <label>UserName</label>
                <input type="email" name={userName}
                    value={userName} onChange={(e) => setUserName(e.target.value)}
                    required></input>
                <label>Password</label>
                <input type="password" name={userName}
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    required></input>

                <input type="submit" value="SignUp">
                </input>
                <input type="reset" value="Clear" onClick={clearVal} />
                <h3> Already Have an account?<Link to="/signin">Login</Link> </h3>
            </form>
        </div>

    )
}

export default SignUp;
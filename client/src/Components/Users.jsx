import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUsers } from "../slice/UserSlice";

const Users = () => {
    const messageVal = useSelector((state) => state.userReducer.message);
    const users = useSelector((gs) => gs.userReducer.users || []);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showUsers())
    }, [dispatch])
    console.log(messageVal);
    console.log(users);
    return (
        <div>
            <h1>Users</h1>
            <table  style={{width:'100%'}}>
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>ContactNo</th>
                        <th>Created</th>
                        <th>Updated</th>
                    </tr>
                      </thead>
                    <tbody>
                        {users.map((user,index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{user.name}</td>
                                <td>{user.userName}</td>
                                <td>{user.contactNo}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.updatedAt}</td>
                            </tr>
                        ))}

                    </tbody>
              
            </table>
        </div>
    )
}
export default Users;
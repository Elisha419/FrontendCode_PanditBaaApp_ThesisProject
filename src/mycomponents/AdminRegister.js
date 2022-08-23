import { useState } from "react";
import axios from "axios";

const AdminRegister = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const adminLogin = (e) => {
        e.preventDefault();
        const adminData = {username, password};
        axios.post("http://localhost:90/admin/register", adminData)
        .then(result=> {
            //setMsg(result.data.message);
            if (result.status === 200) {
                //adminlogin success
                localStorage.setItem('token', result.data.token)
                localStorage.setItem('isAuthenticated', true)
                window.location.replace('/adminall')
                //console.log(localStorage)
            }
            // setMsg(result.data.message);
            // console.log(result.data);
        })
        .catch()
    }
    return (
        <div class="container mt-5">
            <div class="row d-flex justify-content-center">
                <div class="col-md-6">
                    <div class="card px-5 py-4 bg-dark">
                        <h3 class="text-center display-5 text-warning mb-3">Admin Login</h3>
                {msg}
                <form>
                    <div className="form-group col-md-12 my-2 text-white">
                        <label for="username">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter username" 
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}></input>
                        
                    </div>
                    <div className="form-group col-md-12 my-2 text-white">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}></input>
                    </div>
                    <div className="text-center mt-4">
                    <button type="submit" className="btn btn-success" onClick={adminLogin}>Admin Login</button>
                    </div>
                </form>

            </div>
            </div>
            </div>
            
        </div>
    )
}

export default AdminRegister;
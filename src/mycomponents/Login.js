import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const clientLogin = (e) => {
        e.preventDefault();
        const userData = {username, password};

        axios.post("http://localhost:90/client/login", userData)
        .then(result=> {
            //setMsg(result.data.message);
            if (result.data.token) {
                //login success
                localStorage.setItem('token', result.data.token)
                localStorage.setItem('isAuthenticated', true)
                window.location.replace('/');
                //console.log(localStorage)
            }
            else{
                //login fail
                setMsg("Credentials didnot match!")
            }
            
        })
        .catch()
    }
    return (
        <div class="container mt-5">
            <div class="row d-flex justify-content-center">
                <div class="col-md-6">
                    <div class="card px-5 py-4 bg-light">
                        <h3 class="text-center display-5 text-warning mb-3">Login</h3>
                {msg}
                                <form>
                                    <div className="form-group col-md-12 my-2">
                                        <label for="username">Username</label>
                                        <input type="text" className="form-control" id="username" placeholder="Enter username" 
                                        value={username}
                                        onChange={(e)=>setUsername(e.target.value)}></input>                                     
                                    </div>

                                    <div className="form-group col-md-12 my-3">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" 
                                        value={password}
                                        onChange={(e)=>setPassword(e.target.value)}></input>
                                    </div>
                                    <div className="text-center mt-4">
                                    <button type="submit" className="btn btn-success mx-3" onClick={clientLogin}>Login</button>
                                    <a href="/register" class="btn btn-primary" role="button">Register</a>
                                    </div>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
            
    )
}

export default Login;
import { useState } from "react";
import axios from "axios";

const Register = ()=>{
    const[name, setName] =useState('');
    const[phone, setPhone] =useState('');
    const[address, setAddress] =useState('');
    const[email, setEmail] =useState('');
    const[username, setUsername] =useState('');
    const[password, setPassword] =useState('');
    const [msg, setMsg] = useState('');
    const clientRegister =(e)=>{
        e.preventDefault(); //stops the page from being refresh
        const clientData ={name,phone, address, email, username, password};
        axios.post("http://localhost:90/client/register",clientData)
        .then(result=>{
            setMsg(result.data.message)
            alert(msg)
        }
            )
        .catch()
        
        
    }
    return(
        <div>
            <div class="container mt-4">
            <div class="row d-flex justify-content-center">
                <div class="col-md-6">
                    <div class="card px-5 py-4 bg-light">
                        <h3 class="text-center display-5 text-warning mb-3">Registeration Page</h3>
                    <form>
                        <div class='form-group'>
                            
                            <label>Name</label>
                            <input type="text" className="form-control"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}/>
                           
                        </div>

                        <div class='form-group'>
                            <label>Phone</label>
                            <input type="text" className="form-control"
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}/>
                        </div>

                        <div class='form-group'>
                            <label>Address</label>
                            <input type="text" className="form-control"
                           value={address}
                           onChange={(e)=>setAddress(e.target.value)}/>
                        </div>

                        <div class='form-group'>
                            <label>Email</label>
                            <input type="text" className="form-control"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}/>
                        </div>

                        <div class='form-group'>
                            <label>Username</label>
                            <input type="text" className="form-control"
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}/>
                        </div>

                        <div class='form-group mb-3'>
                            <label>Password</label>
                            <input type="text" className="form-control"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}/>
                        </div>

                        <div className="text-center">
                            <button type ="submit" class="btn btn-success mx-3" onClick={clientRegister}>Register</button>
                            <a href="/login" class="btn btn-warning" role="button">Login</a>
                            
                        </div>

                        
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
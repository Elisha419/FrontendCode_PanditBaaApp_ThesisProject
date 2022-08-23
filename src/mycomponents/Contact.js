import { useState } from "react";
import axios from "axios";

const Contact = () => {
    const [cdata, setCdata] = useState([]);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [msg, setMsg] = useState('');

    const clientContact = (e) => {
        e.preventDefault();
        const userData = {name, phone, email, message};

        axios.post("http://localhost:90/client/contact", userData)
        .then(result=>{
            setCdata(result.data)
            setMsg("Thanks for contacting us!")
        })
        .catch(e=>{
            console.log(e)
        })
    };
    return (
        <div class="container mt-5 ">
            <div class="row d-flex justify-content-center">
                <div class="col-md-6">
                    <div class="card px-5 py-4 bg-light">
                        <h3 class="text-center display-5 text-warning mb-3">Contact</h3>
                {msg}
                                <form>
                                    <div className="form-group col-md-12 my-2">
                                        <label for="name">Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Enter name" 
                                        value={name}
                                        onChange={(e)=>setName(e.target.value)}></input>                                     
                                    </div>

                                    <div className="form-group col-md-12 my-3">
                                        <label for="phone">Phone</label>
                                        <input type="text" className="form-control" id="phone" placeholder="Enter phone" 
                                        value={phone}
                                        onChange={(e)=>setPhone(e.target.value)}></input>
                                    </div>
                                    <div className="form-group col-md-12 my-2">
                                        <label for="email">Email</label>
                                        <input type="text" className="form-control" id="email" placeholder="Enter email" 
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}></input>                                     
                                    </div>

                                    <div className="form-group col-md-12 my-3">
                                        <label for="message">Message</label>
                                        <input type="text" className="form-control" id="message" placeholder="Enter message" 
                                        value={message}
                                        onChange={(e)=>setMessage(e.target.value)}></input>
                                    </div>
                                    <div className="text-center mt-4">
                                    <button type="submit" className="btn btn-success" onClick={clientContact}>Submit</button>
                                    </div>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
            
    )
}

export default Contact;
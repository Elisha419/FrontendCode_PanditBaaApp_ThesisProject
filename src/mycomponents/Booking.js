import { useState } from "react";
import axios from "axios";

const Booking = () => {
    const [adata, setAdata] = useState([]);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [bookingdate, setBookingdate] = useState('');
    const [pujaservicename, setPujaservicename] = useState('');
    const [panditname, setPanditname] = useState('');
    const [msg, setMsg] = useState('');

    const clientBooking = (e) => {
        e.preventDefault();
        const userData = {name, phone, email, address, bookingdate, pujaservicename, panditname};

        axios.post("http://localhost:90/client/booking", userData)
        .then(result=>{
            setAdata(result.data)
            setMsg("Thanks for your booking. We will reach you soon!")
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
                        <h3 class="text-center display-5 text-warning mb-3">Booking !!!</h3>
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

                                    <div className="form-group col-md-12 my-2">
                                        <label for="address">Address</label>
                                        <input type="text" className="form-control" id="address" placeholder="Enter address" 
                                        value={address}
                                        onChange={(e)=>setAddress(e.target.value)}></input>                                     
                                    </div>

                                    <div className="form-group col-md-12 my-3">
                                        <label for="bookingdate">Booking Date</label>
                                        <input type="text" className="form-control" id="bookingdate" placeholder="Enter booking date" 
                                        value={bookingdate}
                                        onChange={(e)=>setBookingdate(e.target.value)}></input>
                                    </div>

                                    <div className="form-group col-md-12 my-3">
                                        <label for="pujaservicename"> Puja Service Name</label>
                                        <input type="text" className="form-control" id="pujaservicename" placeholder="Enter puja servicename" 
                                        value={pujaservicename}
                                        onChange={(e)=>setPujaservicename(e.target.value)}></input>
                                    </div>
                                    <div className="form-group col-md-12 my-2">
                                        <label for="panditname">Pandit Name</label>
                                        <input type="text" className="form-control" id="panditname" placeholder="Enter panditname" 
                                        value={panditname}
                                        onChange={(e)=>setPanditname(e.target.value)}></input>                                     
                                    </div>

                                    <div className="text-center mt-4">
                                    <button type="submit" className="btn btn-success" onClick={clientBooking}>Submit</button>
                                    </div>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
            
    )
}

export default Booking;
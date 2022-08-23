import axios from "axios";
import { useState, useEffect } from "react";


const AdminBooking =()=>{


    const [abdata, setABdata] = useState([]);

    const config ={
        headers : {
            Authorization : 'Bearer '+ localStorage.getItem('token')
        }
    }



    useEffect(()=>{
        axios.get("http://localhost:90/booking/all", config)
        .then(result=>{
            setABdata(result.data)
        })
        .catch(e=>{
            console.log(e)
        })
    },[]);

    const deleteBooking=(bid)=>{
    axios.delete("http://localhost:90/booking/delete/" + bid, config)
    .then(result=>{console.log(result.data)})
    .catch()
    }

    return(
            <div class="container px-5 py-3 ">
                <div class="row mt-3 mb-5 col-md-12">
                <h4 class="text-center display-5 text-warning mb-4">All Bookings</h4>
                <div className="table-responsive">
                        <table class="table  table-hover table-bordered table-sm  text-center mt-2 bg-light">
                            <thead class="bg-dark">
                                <tr class="text-light">
                                    <th class="font-weight-normal" scope="col">Name</th>
                                    <th class="font-weight-normal" scope="col">Phone</th>
                                    <th class="font-weight-normal" scope="col">Email</th>
                                    <th class="font-weight-normal" scope="col">Address</th>
                                    <th class="font-weight-normal" scope="col">Booking Date</th>
                                    <th class="font-weight-normal" scope="col">Puja Service Name</th>
                                    <th class="font-weight-normal" scope="col">Pandit Name</th>
                                    <th class="font-weight-normal" scope="col">Action</th>
                                </tr>
                            </thead>
                            {abdata.map(singleData=>{
                                return(
                                    <tbody>
                                        <tr>
                                            <td>{singleData.name}</td>
                                            <td>{singleData.phone}</td>
                                            <td>{singleData.email}</td>
                                            <td>{singleData.address}</td>
                                            <td>{singleData.bookingdate}</td>
                                            <td>{singleData.pujaservicename}</td>
                                            <td>{singleData.panditname}</td>
                                            <td><button class="btn btn-outline-danger btn-sm " role="button" onClick={()=>{deleteBooking(singleData._id)}}>Delete</button></td>
                                        </tr>
                                    </tbody>
                                    )
                                })
                            
                            }
                        </table>
                        </div>

                    </div>
               
                
            </div>
        

                )
            }
export default AdminBooking;
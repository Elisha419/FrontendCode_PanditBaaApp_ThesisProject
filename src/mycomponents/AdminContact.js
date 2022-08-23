import axios from "axios";
import { useState, useEffect } from "react";


const AdminContact =()=>{


    const [acdata, setACdata] = useState([]);

    const config ={
        headers : {
            Authorization : 'Bearer '+ localStorage.getItem('token')
        }
    }



    useEffect(()=>{
        axios.get("http://localhost:90/contact/all", config)
        .then(result=>{
            //console.log(result.data)
            setACdata(result.data)
        })
        .catch(e=>{
            console.log(e)
        })
    },[]);

    const deleteContact=(cid)=>{
    axios.delete("http://localhost:90/contact/delete/" + cid, config)
    .then(result=>{console.log(result.data)})
    .catch()
    }


    return(
        
            <div class="container px-5 py-3 ">
                <div class="row mt-3 mb-5 col-md-12">
                <h4 class="text-center display-5 text-warning mb-4">All Contacts</h4>
                <div className="table-responsive">
                        <table class="table  table-hover table-bordered table-sm  text-center mt-2" style={{backgroundColor: "#faf9cd"}}>
                            <thead class="bg-dark">
                                <tr class="text-light">
                                    <th class="font-weight-normal" scope="col">Name</th>
                                    <th class="font-weight-normal" scope="col">Phone</th>
                                    <th class="font-weight-normal" scope="col">Email</th>
                                    <th class="font-weight-normal" scope="col">Message</th>
                                    <th class="font-weight-normal" scope="col">Action</th>
                                </tr>


                            </thead>
                            {acdata.map(singleData=>{
                                 return(
                                    <tbody>
                                        <tr>
                                            <td>{singleData.name}</td>
                                            <td>{singleData.phone}</td>
                                            <td>{singleData.email}</td>
                                            <td>{singleData.message}</td>
                                            <td><button class="btn btn-outline-danger btn-sm " role="button" onClick={()=>{deleteContact(singleData._id)}}>Delete</button></td>
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
export default AdminContact;
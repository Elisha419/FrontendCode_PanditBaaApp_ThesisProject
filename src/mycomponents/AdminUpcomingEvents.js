import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const AdminUpcomingEvents =()=>{

    const [auedata, setAUEdata] = useState([]);

    const config ={
        headers : {
            Authorization : 'Bearer '+ localStorage.getItem('token')
        }
    }



    useEffect(()=>{
        axios.get("http://localhost:90/upcomingevents/all", config)
        .then(result=>{
            setAUEdata(result.data)
        })
        .catch(e=>{
            console.log(e)
        })
    },[]);

    
    const deleteUpcomingEvents=(ueid)=>{
       
    axios.delete("http://localhost:90/upcomingevents/delete/" + ueid, config)
    .then(result=>{console.log(result.data)})
    .catch()
    }


    return(
        <div className="container mt-5">
            <div className="row">
            <h4 class="text-center display-5 text-warning mb-5">All Upcoming Events</h4>
                
            {auedata.map(singleData=>{
                return(
                    <div className="col-md-4">
                        <div class="card px-5 py-4 bg-light">
                    <h5>Upcoming Event Name : {singleData.uename}</h5>
                    <p><img src={'http://localhost:90/'+singleData.ueimage} className="img-fluid mt-3 mb-2"  /></p>
                    <p className="uedate">Date : {singleData.uedate}</p>
                    <p className="uedescription">Description : {singleData.uedescription}</p>
                    <button class="btn btn-outline-danger btn-sm " role="button" onClick={()=>{deleteUpcomingEvents(singleData._id)}}>Delete</button>
                    <a href={'/updateupcomingevents/'+singleData._id} class="btn btn-outline-primary btn-sm mt-3" role="button">Update</a>
                    </div>
                    
                    </div>
                )
            })}
                        
            </div>
        </div>
    )
}

export default AdminUpcomingEvents;
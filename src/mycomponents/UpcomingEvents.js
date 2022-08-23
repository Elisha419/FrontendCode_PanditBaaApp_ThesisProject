import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UpcomingEvents =()=>{
    const [uedata, setUEdata] = useState([]);

    const config ={
        headers : {
            Authorization : 'Bearer '+ localStorage.getItem('token')
        }
    }
    useEffect(()=>{
        axios.get("http://localhost:90/upcomingevents/total", config)
        .then(result=>{
            //console.log(result.data)
            setUEdata(result.data)
        })
        .catch(e=>{
            console.log(e)
        })
    },[]);

    return(
        <div className="container mt-5">
            <div className="row">
                
            {uedata.map(singleData=>{
                return(
                    <div className="col-md-4">
                        <div class="card px-5 py-4 bg-light">
                    <h5>Name : {singleData.uename}</h5>
                    <p><img src={'http://localhost:90/'+singleData.ueimage} className="img-fluid"/></p>
                    <p><h4 className="uedate">Date : {singleData.uedate}</h4></p>
                    <p className="uedescription">Description : {singleData.uedescription}</p>
                                     
                    
                    </div>
                    </div>
                )
            })}
                        
            </div>
        </div>
    )
}
export default UpcomingEvents;
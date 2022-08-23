import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Services =()=>{
    const [sdata, setSdata] = useState([]);

    const config ={
        headers : {
            Authorization : 'Bearer '+ localStorage.getItem('token')
        }
    }
    useEffect(()=>{
        axios.get("http://localhost:90/service/total", config)
        .then(result=>{
            //console.log(result.data)
            setSdata(result.data)
        })
        .catch(e=>{
            console.log(e)
        })
    },[]);

    return(
        <div className="container mt-5">
            <div className="row">
                
            {sdata.map(singleData=>{
                return(
                    <div className="col-md-4">
                        <div class="card px-5 py-4 bg-light">
                    <h5>Service Name : {singleData.sname}</h5>
                    <p><img src={'http://localhost:90/'+singleData.simage} className="img-fluid"/></p>
                    <p className="sdescription">Service Description : {singleData.sdescription}</p>
                    
                    </div>
                    </div>
                )
            })}
                        
            </div>
        </div>
    )
}
export default Services;
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const AdminServices =()=>{

    const [asdata, setASdata] = useState([]);

    const config ={
        headers : {
            Authorization : 'Bearer '+ localStorage.getItem('token')
        }
    }



    useEffect(()=>{
        axios.get("http://localhost:90/service/all", config)
        .then(result=>{
            //console.log(result.data)
            setASdata(result.data)
        })
        .catch(e=>{
            console.log(e)
        })
    },[]);

    
    const deleteService=(sid)=>{
        //const pro_data = {sid}
       // console.log(sid)
    axios.delete("http://localhost:90/service/delete/" + sid, config)
    .then(result=>{console.log(result.data)})
    .catch()
    }


    return(
        <div className="container mt-5">
            <div className="row">
            <h4 class="text-center display-5 text-warning mb-5">All Services</h4>
                
            {asdata.map(singleData=>{
                return(
                    <div className="col-md-4">
    
                        <div class="card px-5 py-4 bg-light">
                    <h5>Service Name : {singleData.sname}</h5>
                    <p><img src={'http://localhost:90/'+singleData.simage} className="img-fluid mt-3 mb-2"  /></p>
                    <p className="sdescription">Service Description : {singleData.sdescription}</p>
                    <button class="btn btn-outline-danger btn-sm " role="button" onClick={()=>{deleteService(singleData._id)}}>Delete</button>
                    <a href={'/updateservice/'+singleData._id} class="btn btn-outline-primary btn-sm mt-3" role="button">Update</a>
                    </div>
                    
                    </div>
                )
            })}
                        
            </div>
        </div>
    )
}

export default AdminServices;
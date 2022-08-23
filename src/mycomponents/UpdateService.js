import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Updateservice=()=>{
    const {sid} = useParams();
    // console.log(sid)
    const [myservice, setMyservice] = useState([]);
    const [sname, setSname] = useState('');
    const [sdescription, setSdescription] = useState('');
    const [simage, setSimage] = useState('');
   
    const config ={
        headers : {
            Authorization : 'Bearer '+ localStorage.getItem('token')
        }
    }
    useEffect(()=>{
        axios.get("http://localhost:90/service/one/"+sid, config)
        .then(result1212=>{
            console.log(result1212.data)
            setMyservice(result1212.data)
            setSname(result1212.data.sname)
            setSimage(result1212.data.simage)
            setSdescription(result1212.data.sdescription)   
        })
        .catch(e=>{
            /// something went wrong
        })
    },[])



/// to update the service
   const updateService=(e)=>{
       e.preventDefault();

       const servicedata = {
           sid, sname, sdescription
       }

       axios.put("http://localhost:90/service/update", servicedata, config )
   }


// to update image
   const updateImage=(e)=>{
       e.preventDefault();

       let data = new FormData()
       data.append("simage", simage)
       data.append("sid", sid)

       
       axios.put("http://localhost:90/service/image/update", data, config)
   }

    
    return(
       <div className="container mt-5">
           <div className="row">
               
               <div className="col-md-6">
                   <h4>{myservice.sname}</h4>
                   <p><img src={'http://localhost:90/'+ myservice.simage} className="img-fluid mt-2"/></p>
                   <p>Service Descriptrion : {myservice.sdescription}</p>
               </div>
               


               <div className="col-md-6 mt-4">
               <div class="card px-5 py-4 bg-dark">
                    <h2 className="text-warning display-6 mb-3">Update Service</h2>
                    

                   <form>
                        <div className="form-group text-white mb-3">
                            <label>Service Name</label>
                            <input type="text" className="form-control"
                             value={sname}
                             onChange={e=>{setSname(e.target.value)}}/>   
                        </div>

                        <div className="form-group text-white mb-3">
                            <label>Service Description</label>
                            <input type="text" className="form-control"
                             value={sdescription}
                             onChange={e=>{setSdescription(e.target.value)}}/>   
                        </div>

                        <div className="form-group mb-4 text-white mb-3">
                            <label>Service Image</label>
                            <input type="file" className="form-control"
                             onChange={e=>{setSimage(e.target.files[0])}}
                            />
                        </div>


                        
                        <div className="text-center">
                        <button type="submit" className="btn btn-warning mx-3" onClick={updateImage}>Update Image</button>
                        <button type="submit" className="btn btn-success mx-3" onClick={updateService}>Update Details</button>
                         
                        </div>
                    </form>
                    </div>
               </div>
           </div>
           </div>
    )
    
}

export default Updateservice;
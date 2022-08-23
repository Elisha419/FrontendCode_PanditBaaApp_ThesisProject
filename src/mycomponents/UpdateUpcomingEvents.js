import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Updateupcomingevents=()=>{

    const {ueid} = useParams();
    console.log(ueid)

    const [myupcomingevents, setMyupcomingevents] = useState([]);
    const [uename, setUEname] = useState('');
    const [uedate, setUEdate] = useState('');
    const [uedescription, setUEdescription] = useState('');
    const [ueimage, setUEimage] = useState('');
   

    const config ={
        headers : {
            Authorization : 'Bearer '+ localStorage.getItem('token')
        }
    }
    useEffect(()=>{
        axios.get("http://localhost:90/upcomingevents/one/"+ueid, config)
        .then(result1212=>{
            console.log(result1212.data)
            setMyupcomingevents(result1212.data)
            setUEname(result1212.data.uename)
            setUEimage(result1212.data.ueimage)
            setUEdate(result1212.data.uedate)
            setUEdescription(result1212.data.uedescription)
           
        })
        .catch(e=>{
            /// something went wrong
        })
    },[])


/// to update the upcoming events
   const updateUpcomingevents=(e)=>{
       e.preventDefault();

       const upcomingeventsdata = {
           ueid, uename, uedate, uedescription
       }


axios.put("http://localhost:90/upcomingevents/update", upcomingeventsdata, config )
   }


   // to update image
   const updateImage=(e)=>{
    e.preventDefault();

    let data = new FormData()
    data.append("ueimage", ueimage)
    data.append("ueid", ueid)

    
    axios.put("http://localhost:90/upcomingevents/image/update", data, config )
}

    return(
       <div className="container mt-5">
           <div className="row">
               
               <div className="col-md-6">
                   <h4>{myupcomingevents.uename}</h4>
                   <p><img src={'http://localhost:90/'+ myupcomingevents.ueimage} className="img-fluid mt-2"/></p>
                   <p>Date : {myupcomingevents.uedate}</p>
                   <p>Descriptrion : {myupcomingevents.uedescription}</p>
                   
               </div>
               


               <div className="col-md-6 mt-4">
               <div class="card px-5 py-4 bg-dark">
                    <h2 className="text-warning display-6 mb-3">Update Upcoming Events</h2>
                    
                    <form>
                        <div className="form-group text-white mb-3">
                            <label>Upcoming Events Name</label>
                            <input type="text" className="form-control"
                            value={uename}
                            onChange={e=>{setUEname(e.target.value)}}
                            />
                        </div>

                        <div className="form-group text-white mb-3">
                            <label>Upcoming Events Description</label>
                            <input type="text" className="form-control"
                             value={uedescription}
                             onChange={e=>{setUEdescription(e.target.value)}}
                            />
                        </div>

                        <div className="form-group text-white mb-3">
                            <label>Date</label>
                            <input type="text" className="form-control"
                             value={uedate}
                             onChange={e=>{setUEdate(e.target.value)}}
                            />
                        </div>

                        <div className="form-group text-white mb-3">
                            <label>Upcoming Events Image</label>
                            <input type="file" className="form-control"
                             onChange={e=>{setUEimage(e.target.files[0])}}
                            />
                        </div>


                        
                        <div className="text-center">
                        <button type="submit" className="btn btn-warning mx-2 mb-2" onClick={updateImage}>Update Image</button>
                        <button type="submit" className="btn btn-success mx-3" onClick={updateUpcomingevents}>Update Details</button>
                        </div>
                    </form>
                    </div>
               </div>
           </div>
           </div>
    )
    
}

export default Updateupcomingevents;
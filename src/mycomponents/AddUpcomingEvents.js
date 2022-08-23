import { useState } from "react";
import axios from "axios";


const AddUpcomingEvents=()=>{

    const [uename, setUEname] = useState('');
    const [uedate, setUEdate] = useState('');
    const [uedescription, setUEdescription] = useState('');
    const [ueimage, setUEimage] = useState('');
    const [message, setMessage] = useState('');
    
    


    const config ={
        headers : {
            Authorization : 'Bearer ' + localStorage.getItem('token')
        }
    }

    const addupcomingevents12=(e)=>{
        e.preventDefault();

        const upcomingeventsData = new FormData();
        upcomingeventsData.append('uename', uename);
        upcomingeventsData.append('uedate', uedate);
        upcomingeventsData.append('uedescription', uedescription);
        upcomingeventsData.append('upcomingevents_image', ueimage);



        
        axios.post("http://localhost:90/upcomingevents/insert", upcomingeventsData, config)
        .then(result111=>{
            if(result111.data.success){
                // data inserted
                console.log(result111)
                setMessage("Upcoming Events Inserted Successfully!!");

            }
            else{
                setMessage("Something went wrong!!");
            }
        })
        .catch(e=>{
            setMessage("Something went wrong!!");
        });
        
    }

    return(
        <div class="container mt-5 ">
            <div class="row d-flex justify-content-center">
                <div class="col-md-6">
                    <div class="card px-5 py-4 bg-dark">
                        <h3 class="text-center display-5 text-warning mb-3">Add Upcoming Events</h3>
                        
                        <div class="text-success">
                        {message}
                        </div>
                
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

                        <div className="text-center mt-4">
                            <button type="submit" className="btn btn-success" onClick={addupcomingevents12}>Submit</button>
                        </div>

                        
                        
                    </form>
                </div>
                
                
            </div>
        </div>
        </div>
    )
}


export default AddUpcomingEvents;
import { useState } from "react";
import axios from "axios";


const AddService=()=>{
    const [sname, setSname] = useState('');
    const [sdescription, setSdescription] = useState('');
    const [simage, setSimage] = useState('');
    const [message, setMessage] = useState('');

    const config ={
        headers : {
            Authorization : 'Bearer ' + localStorage.getItem('token')
        }
    }

    const addservice12=(e)=>{
        e.preventDefault();

        const serviceData = new FormData();
        serviceData.append('sname', sname);
        serviceData.append('sdescription', sdescription);
        serviceData.append('service_image', simage);



        
        axios.post("http://localhost:90/service/insert", serviceData, config)
        .then(result111=>{
            if(result111.data.success){
                // data inserted
                console.log(result111)
                setMessage("Service Inserted Successfully!!");

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
                        <h3 class="text-center display-5 text-warning mb-3">Add Service</h3>
                        
                        <div class="text-success">
                        {message}
                        </div>
                
                    <form>
                        <div className="form-group text-white mb-3">
                            <label>Service Name</label>
                            <input type="text" className="form-control"
                            value={sname}
                            onChange={e=>{setSname(e.target.value)}}
                            />
                        </div>

                        <div className="form-group text-white mb-3">
                            <label>Service Description</label>
                            <input type="text" className="form-control"
                             value={sdescription}
                             onChange={e=>{setSdescription(e.target.value)}}
                            />
                        </div>

                        <div className="form-group text-white mb-3">
                            <label>Service Image</label>
                            <input type="file" className="form-control"
                             onChange={e=>{setSimage(e.target.files[0])}}
                            />
                        </div>

                        <div className="text-center mt-4">
                            <button type="submit" className="btn btn-success" onClick={addservice12}>Submit</button>
                        </div>

                        
                        {/* <p><input type='submit' className="btn btn-primary" onClick={addservice12} /></p> */}
                    </form>
                </div>
                
                
            </div>
        </div>
        </div>
    )
}


export default AddService;
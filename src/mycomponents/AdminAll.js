import { Component } from "react/cjs/react.development";
import {Link} from "react-router-dom";

class AdminAll extends Component{
    
  render(){
    return(

   <div>
      <div class="container mt-5">
        <div class="row d-flex justify-content-center">
            <div class="col-md-5">
              <div class="card px-5 py-4 bg-light">
                <h3 class="text-center display-5 text-warning mb-4">Admin All</h3>
                  <a href="/addService" class="btn btn-secondary mb-3" role="button">Add Service</a>
                  <a href="/adminservices" class="btn btn-dark mb-3" role="button">Admin Services</a>
                  <a href="/admincontact" class="btn btn-secondary mb-3" role="button">All Contact Details</a>
                  <a href="/adminbooking" class="btn btn-dark mb-3" role="button">All Booking Details</a>
                  <a href="/addUpcomingevents" class="btn btn-secondary mb-3" role="button">Add Upcoming Events</a>
                  <a href="/adminUpcomingevents" class="btn btn-dark mb-3" role="button">Admin Upcoming Events</a>

              </div>
            </div> 
        </div>
      </div>
        
   </div>

    )

  }
}
export default AdminAll;
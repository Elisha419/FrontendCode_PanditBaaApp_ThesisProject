import { Component } from "react/cjs/react.development";
import {Link} from "react-router-dom";

class Header extends Component{
    
  render(){

    const logout=()=>{
      localStorage.clear();
      window.location.replace('/');
    }


    var menu;

    if(localStorage.getItem('token')){
      menu=(
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                  <Link class="nav-link" to="/">Home</Link>
                </li>
                
                <li class="nav-item active">
                  <Link class="nav-link" to="/contact">Contact</Link>
                </li>
                
                <li class="nav-item active">
                  <Link class="nav-link" to="/services">PujaServices</Link>
                </li>

                <li class="nav-item active">
                  <Link class="nav-link" to="/booking">BookingPandit</Link>
                </li>

                <li class="nav-item active">
                  <Link class="nav-link" to="/upcomingevents">UpcomingEvents</Link>
                </li>

                <li class="nav-item active py-3">
                  <button class="btn btn-danger " role="button" onClick={logout}>LogOut</button>
                </li>

            </ul>
        </div>
      )
    }
    else{
      menu=(
        
            <ul class="navbar-nav" id="navbarNav">
                <li class="nav-item active">
                  <Link class="nav-link" to="/">Home</Link>
                </li>
                
                <li class="nav-item active">
                  <Link class="nav-link" to="/contact">Contact</Link>
                </li>
                
                <li class="nav-item active">
                  <Link class="nav-link" to="/register">Register</Link>
                </li>

                <li class="nav-item active">
                  <Link class="nav-link" to="/login">Login</Link>
                </li>

                <li class="nav-item active">
                  <Link class="nav-link" to="/adminlogin">AdminLogin</Link>
                </li>
            </ul>
            
       
      )
    }
    
      
      return(
          <>
          <div>

          <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
              <a class="navbar-brand text-warning px-3" href="/">Pandit Baa</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div>
              {menu}
              </div>
              
              </nav>

          </div>
          
          </>
      )
  }
}
export default Header;
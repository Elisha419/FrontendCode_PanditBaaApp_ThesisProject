import { Component } from "react/cjs/react.development";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services"
import {Route, Routes} from 'react-router-dom';
import Register from "./Register";
import Login from "./Login";
import AddService from "./AddService";
import AdminLogin from "./AdminLogin";
import AdminServices from "./AdminServices";
import UpdateService from "./UpdateService";
import Booking from "./Booking";
import AdminContact from "./AdminContact";
import AdminBooking from "./AdminBooking";
import AdminAll from "./AdminAll";
import UpcomingEvents from "./UpcomingEvents";
import AddUpcomingEvents from "./AddUpcomingEvents";
import AdminUpcomingEvents from "./AdminUpcomingEvents";
import UpdateUpcomingEvents from "./UpdateUpcomingEvents";
import AdminRegister from "./AdminRegister";



class Mid extends Component{
    render(){
        return(
            <div>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/services" element={<Services/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/addService" element={<AddService/>} />
                    <Route path="/adminlogin" element={<AdminLogin/>} />
                    <Route path="/adminregister" element={<AdminRegister/>} />
                    <Route path="/adminservices" element={<AdminServices/>} />
                    <Route path='/updateservice/:sid' element={<UpdateService/>} />
                    <Route path="/booking" element={<Booking/>} />
                    <Route path="/admincontact" element={<AdminContact/>} />
                    <Route path="/adminbooking" element={<AdminBooking/>} />
                    <Route path="/adminall" element={<AdminAll/>} />
                    <Route path="/upcomingevents" element={<UpcomingEvents/>} />
                    <Route path="/addupcomingevents" element={<AddUpcomingEvents/>} />
                    <Route path="/adminupcomingevents" element={<AdminUpcomingEvents/>} />
                    <Route path='/updateupcomingevents/:ueid' element={<UpdateUpcomingEvents/>} />

                
                </Routes>
                
            </div>
        )
    }
}

export default Mid;
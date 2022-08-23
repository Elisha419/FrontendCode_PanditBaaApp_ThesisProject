import { Component } from "react/cjs/react.development";

class Footer extends Component{
    render(){
        return(
            <div class="page-footer bg-dark">
                 
                <div class="text-center text-md-left mt-5">
                    <div class="container-fluid pt-4">
                    <div class="row">
                        <div class="col-md-3 mx-auto mb-4">
                        <h6 class="text-uppercase font-weight-bold text-warning">Beauty World at a glance</h6>
                        
                        <p class="mt-4 text-white">“Pandit Baa” is a one stop solution that provides Hassale-free puja services.
                        Experience the online booking of pandit along with all puja samagris. 
                        Know all the things required for any pujas.</p>
                        </div>
                        <div class="col-md-2 mx-auto mb-4">
                        <h6 class="text-uppercase font-weight-bold text-warning">Useful links</h6>
                        
                            <ul class="list-unstyled">
                            <li class="my-2 mt-3"><a href="/" className="text-light">Home</a></li>
                            <li class="my-2"><a href="/services" className="text-light">Services</a></li>
                            <li class="my-2"> <a href="/booking" className="text-light">Booking</a></li>
                            <li class="my-2"> <a href="/contact" className="text-light">Contact</a></li>
                            <li class="my-2"> <a href="/upcomingevents" className="text-light">UpcomingEvents</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3 mx-auto mb-4">
                        <h6 class="text-uppercase font-weight-bold text-warning">Talk to us</h6>
                        
                
                            <ul class="list-unstyled ">
                            <li class="my-2 text-white"><i class="fas fa-home mr-3 mt-3"></i> PanditBaa, Ktm</li>
                            <li class="my-2 text-white"><i class="fas fa-phone mr-3"></i> +977-9801021264</li>
                            <li class="my-2 text-white"><i class="fas fa-envelope mr-3"></i> panditbaa@gmail.com</li>
                            
                
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="footer-copyright text-center py-3 text-white">
                    <p>&copy; 2022 Pandit Baa, all rights reserved. Images taken from freepik.</p>
                    {/* <a href="https://www.facebook.com/" class="text-white"><i class="fab fa-facebook h2" style="margin-left: 1rem;" ></i></a>
                    <a href="https://www.gmail.com/" class="text-white"> <i class="fas fa-envelope h2" style="margin-left: 1rem;"></i></a> */}
                </div>

            </div>
        )

    }
}

export default Footer;
import { Component } from "react/cjs/react.development";
import third from "../images/third.jpg"


class Home extends Component{
    render(){
        return(
            <div>
                <div class="main py-5">
                    <div class="my-5 py-5 text-center">
                    <h2 class="text-white mt-5 pt-5 display-2">"PanditBaa"</h2>
                    <p class="font-weight-light h4 mt-3 text-white">"One stop solution for booking pandit, knowing puja samagris..."</p>
                    </div>

                </div>

                <div class="motive container mt-5 mb-5">
                    <h2 class="text-center display-4 text-warning">Few Words About Us</h2>
                    <p class="text-center mt-5">
                    “Pandit Baa” is a one stop solution that provides Hassale-free puja services.Experience the online booking of pandit along with all puja samagris. 
                    Know all the things required that are required for any religious occassions. In addition to this, our system provides the information about all the upcoming events.
                    </p>
                </div>


                <div class="second">
                <div class="container">
                    <div class="float-right py-5 my-5">
                    <div class="py-5">
                        <h1 class="text-warning text-center font-weight-light mb-3 mt-5 display-5">Finding pandit is our duty !!!</h1>
                        <h5 class="text-light text-center font-weight-light mb-3">"Signup today and experience best pandit and puja services"</h5>
                        <ul class="started text-center pr-5">
                            <a href="/register" class="btn btn-warning mt-3" role="button">Get Started</a>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>


                <div class="container mb-5 mt-5">
                    <h2 class="text-center display-4 mb-5 text-warning">Namelist of Pandit </h2>
                   
                <div class="row">

                <div class="col-sm">
         <img src={third} class="characteristics rounded img-fluid"/>
  
      </div>
                    <div class="col-sm">
                        <div class="all">
                        <h4 class="text-secondary">Paurakh Adhikari</h4>
                        <span class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </span>
                        </div>
                        <div class="all mt-2">
                        <h4 class="text-secondary">Hari Upadhyay</h4>
                        <span class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </span>
                        </div>
                        <div class="all mt-2">
                        <h4 class="text-secondary">Ram Pandey</h4>
                        <span class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </span>
                        </div>

                        <div class="all mt-2">
                        <h4 class="text-secondary">Shyam Gyawali</h4>
                        <span class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </span>
                        </div>

                        <div class="all mt-2">
                        <h4 class="text-secondary">Arpan Mainali</h4>
                        <span class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
                        </div>

                        <div class="all mt-2">
                        <h4 class="text-secondary">Sankalpa Regmi</h4>
                        <span class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
                        </div>
                        
                    </div>
                    
                </div>
                </div>
                            </div>
                        )
                    }

                }

export default Home;
    
import React from 'react';
import SearchBar from './SearchBar';

import{ Link }from 'react-router-dom';
// import BecomeASavior from './BecomeASavior';

function Home() {

    return(
        <div className="home_wrapper">
            <div className ="home_firstthird">
               <div className="home_firstthird_text">
                <h1>Flavor Savior</h1>
                <br />
                <h3>Find a Restaurant</h3>
                <SearchBar />
                </div>
            </div>
            <div className="home_becomea_savior">
                <h3 className="bold">Become a Savior</h3>
                {/* insert image of someone on a scooter */}
                <p className="hometext">
                    As a Savior, you'll be <br />
                    making reliable money- working<br />
                    anytime, anywhere.
                </p>   
    
                        {/* <Route path="/becomeasavior">Start Earning</Route> */}
         
                <Link to="/become-a-savior" className="link" >Start Earning</Link>
                <br />
                <div className="driversimgs">
                <img src="/images/kisspng-fast-food-delivery-online-food-ordering-fried-chic-5af99aea8ccb65.2444905915263075625767-removebg-preview.png" alt="oh no" className="driverimg"/>
                
                <img src="/images/kisspng-fast-food-delivery-online-food-ordering-fried-chic-5af99aea8ccb65.2444905915263075625767-removebg-preview.png" alt="oh no" className="driverimg"/>
                <img src="/images/kisspng-fast-food-delivery-online-food-ordering-fried-chic-5af99aea8ccb65.2444905915263075625767-removebg-preview.png" alt="oh no" className="driverimg"/>
                </div>
                </div>
            <div className="home_secondthird">
                
                <img src='https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/c9bb7076ac0c0309d96839c7137a355b.jpg' alt='' className="homesecondimg"/>
                <p>
                    <strong className="bold">It'll be here. <br /> All in one app.</strong><br /><br />
                
                    Coming soon, you'll be able to order right from your phone, <br /><br />
                    discover local, on-demand delivery or Pickup from Restaurants, <br /><br />
                    nearby grocery and convenience stores, and more.
                </p>
            </div>
            <div className='home_third'>
                <div className="homethirdtext">
                <h2 className="bold"><strong>Every Flavor Welcome</strong></h2>
                <p className="text">
                    From your neighborhood sushi spot to the burger <br />
                    and fries you crave, choose from over 300,000 <br />
                    local and national favorites across the U.S.,<br />
                    Canada, and Antarctica. 
                </p>
                {/* this button should route to restaurants page */}
                <Link to="/restaurants" className="link" >Find Restaurants</Link>
                <br />
                </div>
                <img src='https://images.unsplash.com/photo-1576867757603-05b134ebc379?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='oh no' className="homefinalimg" />
            </div>
            <div className="contact">
                <h3>Having Problems? Contact Us</h3>
                <p>*insert all of batouls contact info*</p>
                <p>*insert all of wills contact info*</p>
            </div>
        </div>
    )
}

export default Home;
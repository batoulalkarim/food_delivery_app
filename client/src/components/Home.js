import React from 'react';
import SearchBar from './SearchBar';

// import{ Link }from 'react-router-dom';
// import BecomeASavior from './BecomeASavior';

function Home() {

    return(
        <div className="home_wrapper">
            <div className ="home_firstthird">
               <div className="home_firstthird_text">
                <h1>Flavor Savior</h1>
                <SearchBar />
                
                <h3>Become a Savior</h3>
                {/* insert image of someone on a scooter */}
                <p>
                    As a Savior, you'll be <br />
                    making reliable money- working<br />
                    anytime, anywhere.
                </p>   
    
                        {/* <Route path="/becomeasavior">Start Earning</Route> */}
         
                {/* <Link href="/becomeasavior" >Start Earning</Link> */}
                </div>
            </div>
            <div className="home_secondthird">
                {/* flex box this so theyre side by side */}
                <img src='' alt='' />
                <h2><strong>It'll be here. <br /> All in one app.</strong></h2>
                <p>
                    Coming soon, you'll be able to order right from your phone, <br />
                    discover local, on-demand delivery or Pickup from Restaurants, <br />
                    nearby grocery and convenience stores, and more.
                </p>
            </div>
            <div className='home_third'>
                <img src='' alt='' />
                <h2><strong>Every Flavor Welcome</strong></h2>
                <p>
                    From your neighborhood sushi spot to the burger <br />
                    and fries you crave, choose from over 300,000 <br />
                    local and national favorites across the U.S.,<br />
                    Canada, and Antarctica. 
                </p>
                {/* this button should route to restaurants page */}
                <button>Find restaurants</button>
            </div>
        </div>
    )
}

export default Home;
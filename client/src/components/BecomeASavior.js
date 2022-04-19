import React from 'react';

function BecomeASavior(){
    return(
        <div>
            <h3>Flavor Savior</h3>
            <img src='' alt='deliveryimg' />
                <h3>Your time. Your goals. You're the boss.</h3>
                <h3>Drive, deliver, and earn with FlavorSavior.</h3>
                <p>
                    Start and stop when you want
                    <input type='email' id="email" pattern=".+@gmail\.com" size="30" required placeholder="email"></input>
                </p>
            
            <h2>What is FlavorSavior</h2>
            <p>
                Available in over 10,000 cities in the U.S., Canada, and Antarctica, FlavorSavior is about connecting
                people with with possibilities: bigger savings accounts, wider nets, stronger communities, and happier
                days. We empower local businesses and local drivers(called Saviors) with opportunities to earn, work
                and live.     
             </p>
             <br />
             <p>
                 As a Savior, you can be your own boss and enjoy the flexibility of choosing when, where, and how much you earn.
                 All you need is a mode of transportation and a smartphone to start making money. <br />
                 It's that simple.
             </p>
             <br />
             <h2>Why deliver with FlavorSavior</h2>
             {/* insert image here of a wallet with cash */}
             <p>
                 <strong>Earn extra money for your goals</strong>
                 Achieve your short-term goals or long-term dreams by driving or <br />
                 biking with FlavorSavior. Heck, you can walk if you want.
            </p>
            <p>
                 <br />
                 {/* insert image of mini calendar here */}
                 <strong>Choose your own hours</strong><br />
                 Unlike full-time jobs or seasonal gigs, when and where you work is <br />
                 totally up to you. 
             </p>
             <br />
            <p>
                {/* insert mini image of map here */}
                <strong>Freedom to dash anywhere</strong>
                <br />
                Deliver near your home or in a city you're just visiting.
            </p>
            <p>
                {/* insert image of todo list checked off here */}
                <strong>Easy to get started</strong> <br />
                Don't worry about your car inspections or vehicle restrictions. Just sign up <br />
                and receive everything you need to start earning.
            </p>
            <p>
                {/* insert image of word now */}
                <strong>Receive deliveries right away</strong>
                Once approved, log on to the Dasher app to receive nearby orders <br />
                immediately.
            </p>
            <p>
                {/* insert image of search bar here */}
                <strong>Know how much you'll make</strong>
                Clear and concise pay model lets you know how much you will make<br />
                before accepting any order. 
            </p>
            {/* final portion of page light pink bg */}
         
                <h2><strong>Sign up details</strong></h2>
                <h4>Requirements</h4>
                <ul>
                    <li>18 or older</li>
                    <li>Any car, scooter, or bicycle</li>
                    <li>Driver's license number</li>
                    <li>Social security number (only in United States)</li>
                    <li>Final Step: consent to a background check</li>
                </ul>
                <h4>How to sign up</h4>
                <ul>
                    <li>Submit application</li>
                    <li>Complete sign up</li>
                    <li>Get the app and go</li>
                </ul>
            
        </div>
    )
}

export default BecomeASavior;
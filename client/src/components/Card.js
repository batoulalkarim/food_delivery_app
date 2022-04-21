import React from 'react'
import { Link } from 'react-router-dom';



function ResCard({restaurant}){
    return(
        <div className ="card" key={restaurant.id}>
           
            <div className="image">
                
                <img alt="oops" src={restaurant.image_url}/>
                
            </div>
            <div className="content">
                {/* <div className="header"> */}
                <h4>name here{restaurant.name}</h4>
                <h5>{restaurant.distance} minutes </h5>
                <h6>${restaurant.delivery_fee}</h6>
                <Link to='/restaurantdetails'>Order Now</Link>
                </div>
            </div>
           
        // </div>

    )

}
export default ResCard;


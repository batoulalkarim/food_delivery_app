import React from 'react'
import { Link } from 'react-router-dom';



function ResCard({restaurant}){
    return(
        <div className ="card" key={restaurant.id}>
           
            <div className="image">
                
                <img alt="oops" src={restaurant.image_url}/>
                
            </div>
            <div className="content">
                <div className="header">
                <Link to={`/restaurantdetails/${restaurant.id}`}>Order Now</Link>
                <h4>{restaurant.title}</h4>
                <h5>{restaurant.distance} minutes away </h5>
                <h6>${restaurant.delivery_fee}</h6>
                <Link to={`/restaurantreviews/${restaurant.id}`}>Read Reviews</Link>
                </div>
                </div>
            </div>
           
        // </div>

    )

}
export default ResCard;


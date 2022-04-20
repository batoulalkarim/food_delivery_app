import React from 'react'

function ResCard({restaurant, showView}){
    return(
        <div className ="card" key={restaurant.id} onClick={showView}>
            <div className="image">
                <img alt="oops" src={restaurant.image_url}/>
            </div>
            <div className="content">
                <div className="header">
                {restaurant.name}
                </div>
            </div>
        </div>

    )

}
export default ResCard;


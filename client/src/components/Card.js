import React from 'react'

function ResCard(){
    return(
        <div className ="ui card" key={restaurant.id} onClick={showView}>
            <div className="image">
                <img alt="oops" src={restaurant.image_url}/>
            </div>
            <div className="content">
                <div className="header">
                {restaurant.name}
                </div>

    )



}


export default ResCard
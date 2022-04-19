import React from "react"
import ResCard from "/Card.js"

const ResPage = ({resPage, view}) => {

    const Restaurants = resCollection.map((restaurant,index) => {
        return <div className ="ui column"><ResCard key={index} restaurants={restaurants} view={view} /></div>
    });
    
    return (
    <div className="ui four column grid">
        <div className='row'>
            {restaurants}
        </div>
    </div>
    )
  };
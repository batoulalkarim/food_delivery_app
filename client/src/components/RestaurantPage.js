import React, {useState, useEffect} from "react"

const RestaurantPage = ({resPage, view}) => {
    const [restrs, setRestrs] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/restaurants')
        .then(res => res.json())
        .then(data => {
            setRestrs(data)
        }) 
    }, [])
    
    return(
        <div>
            {restrs.map(r => {
                return(
                    <div>
                        <h1>{r.name}</h1>
                    </div>
                )
            })}
        </div>
    )
  };

  export default RestaurantPage;
import React, {useState, useEffect} from "react"
import ResCard from "./Card";

function RestaurantPage() {
    const [restrs, setRestrs] = useState([])
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/restaurants')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setRestrs(data)

        }) 
    }, [])

    
    const cards = restrs.map((restaurant) => {
        return(<ResCard key={restaurant.id} restaurant={restaurant} />)
    })

    function handleSearchChange(e) {
        setSearch(e.target.value.toLowerCase());
        
    }
    

    const filteredRestrs = restrs.map((restaurant) => {
        return ((restaurant.title.toLowerCase().includes(search.toLowerCase)))
    })

    return(
        <div className="restaurantpageContainer">
            <h1 className="title">FlavorSavior</h1>
            <div className="resheader">
            <h1>Crave it? Get it.</h1>
            <p className="restext">Search for your favorite restaurant, cuisine, or dish.</p>
            <div>
                <input type="search" placeholder="Search" className="search" onChange={handleSearchChange} value={search} />
            </div>
            </div>
            <div className="logos">
                <img alt="oh no" src="/images/Yellow_Brown_Modern_Burger_Logo_-_Logos__1_-removebg-preview.png" />
                <img alt="oh no" src="/images/Yellow_Brown_Modern_Burger_Logo_-_Logos__1_-removebg-preview.png" />
                <img alt="oh no" src="/images/Yellow_Brown_Modern_Burger_Logo_-_Logos__1_-removebg-preview.png" />
            </div>
            <div className="cardcont">
            {cards}
            </div> 
            {
                filteredRestrs.map((restaurant) => {
                    if (restaurant.title){
                        return (
                            <ResCard key={restaurant.id} restaurant={restaurant}/>
                        )}
                        else return null;
                })
            }
        </div>
        

    )
  };

  export default RestaurantPage;
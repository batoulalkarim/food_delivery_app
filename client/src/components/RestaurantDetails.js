import React, {useEffect} from 'react';
import ItemCard from './ItemCard';
// import { useParams} from 'react-router-dom';

function RestaurantDetails({restaurant}){
    // const [menu, setMenu] = useState([])
    // console.log(menu)
    
    useEffect(() => {
        fetch('/restaurants/:restaurant_id/items')
        .then(res => res.json())
        .then(data => {
            // setMenu(data)
            console.log(data)
        })
        .catch(err => console.log(err))
    }, [])

    // const displayCard = menu.data.map(item => {
    //     return(<ul><li>{item.name}</li></ul>)
    // })
        // const listOfItems = menu.map((item) => {
        //    return<ItemCard key={item.id} item={item}/>
        // })
    
   


    return(
        <div>
            <h1>{}</h1>
            {/* {displayCard} */}
            {/* <ItemCard />
            <ItemCard /> */}
           <ItemCard />
            {/* {itemsInMenu} */}
        </div>
    )
}

export default RestaurantDetails;
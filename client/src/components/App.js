import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login';
import Home from './Home';
import NavBar from './NavBar';
import BecomeASavior from './BecomeASavior';
import RestaurantPage from './RestaurantPage'
import RestaurantDetails from './RestaurantDetails';
import Cart from './Cart';
import Review from './Review';
import Contact from './Contact';


// import LoginForm from './LoginForm';

function App() {
  const [user, setUser] = useState('');
  const [cartList, setCartList] = useState([]); 
  const [items, setItems] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    fetch('/me').then((res) => {
      if(res.ok){
        res.json().then((user) => setUser(user))
      } 
    });
  }, []);

  

  useEffect(() => {
    fetch("http://localhost:3000/items")
    .then(res => res.json())
    .then(data => {
      setItems(data)
    })
  }, [])

  function handleAddToCart(item){
    const foundIndex = cartList.findIndex(one => item.id === one.id);
    if (foundIndex === -1) {
      setCartList([...cartList, item]);
      console.log("item is:", item)
    } else {
      console.log("This Item's already in your cart!")
    }
  }

  function handleRemovefromCart(item){
    const foundIndex = cartList.findIndex(one => item.id === one.id);
    if (foundIndex === -1) {
      console.log("Item isn't in cart")
    } else {
      const copyArray = [...cartList];
      copyArray.splice(foundIndex, 1);

      setCartList(copyArray);
    }
  }

  if(!user) return <Login setUser ={setUser} />
  return (

 <>

  
 <Router>
 <NavBar setUser={setUser} user={user}/>

    <Switch>
    <Route exact path="/become-a-savior">
        <BecomeASavior />
      </Route>
      <Route path="/restaurants">
        <RestaurantPage />
      </Route>
      <Route path="/restaurantdetails/:restaurant_id">
        <RestaurantDetails items={items} onAddToCart={handleAddToCart} />
      </Route>
      <Route path="/cart">
        <Cart cartList={cartList} onItemRemove={handleRemovefromCart} user={user}/>
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/restaurantreviews/:restaurant_id">
        <Review />
      </Route>  
      <Route path="/">
        <Home user={user}/>
      </Route>
    </Switch>
    </Router>
</>
   
  );
}

export default App;
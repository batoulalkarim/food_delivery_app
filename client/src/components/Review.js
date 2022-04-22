import React, { useEffect, useState } from 'react';
import {useParams, useHistory } from 'react-router-dom';



function Review(){
    let {restaurant_id} = useParams()
    


    const history = useHistory()
    const [revs, setRevs] = useState(null)
    const [likes, setLikes] = useState([]);
    const [review, setReview] = useState('');
    const [post, setPost] = useState('');
    const [username, setUsername] = useState('');
    const [dateposted, setDateposted] = useState('');
    const [rating, setRating] = useState('');
    const [errors, setErrors] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/restaurants/${restaurant_id}/reviews/${restaurant_id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setRevs(data)
        })
    }, [])

    
    function handleaddlikes(e){
        e.preventDefault()
        const likecount = {
            likes
        }
           fetch(`http://localhost:3000/restaurants/${restaurant_id}/reviews/${restaurant_id}`, {
               method: "POST",
               headers: {'Content-Type' : 'application/json',
            },
                body: JSON.stringify(likecount)
           })
           .then(res => {
               if(res.ok) {
                   console.log(setLikes)
                //    res.json().then(setLikes)
               } else {
                   res.json().then(e => setErrors(Object.entries(e.error).flat()))
               }
           })
    }

    function handleDelete(){
        fetch(`${restaurant_id}/reviews/${restaurant_id}`, {
            method: "DELETE",
        }).then(() => {
            setRevs(revs.filter(e => {
                console.log(setRevs)
                return(e.id !== review.id)
            }))
        })
        // .then(r => r.json())
        // .then(data => console.log(data))
    }

    const display = revs ?
    revs.map((rev) => {
        return(
            <div>
            <div className="reviewcard" key={rev.id} revs={revs}>
            {/* <h6 className="ctext">Review for {rev.restaurant.title} Restaurant:</h6> */}
                <p>
                    <br />
                Review for {rev.restaurant.title} Restaurant: <br /><br />
                {rev.username} : <br />{rev.review}<br />
                Date Visited: {rev.dateposted}<br />
                Rating: {rev.rating}
                </p>
                <button onClick = {handleDelete}>Delete Comment</button>
                <button onClick ={handleaddlikes} >+  {rev.likes} </button>
                {/* <button>-</button> */}
            </div>
            </div>
        )
    })
    : null

    function onSubmit(e){
        e.preventDefault()
        const newReview = {
            review,
            username,
            dateposted,
            rating
        }
        fetch(`http://localhost:3000/restaurants/${restaurant_id}/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newReview)
        })
        .then(res => {
            if(res.ok) {
                console.log(setPost)
                res.json().then(setPost)
                alert('Thank you for your review!')
                history.push("/")
            } else {
                res.json().then(e => setErrors(Object.entries(e.error).flat()))
            }
        })
    }

    return(
        <div className="reviewcontainer">
            
            <form onSubmit={onSubmit}>
            <label>
                Leave a Review!
                <br />
                <input type="text" value={review} onChange={(e) => setReview(e.target.value)} />
            </label>
            <br />
            <label>
                Enter an Alias or Your name 
                <br />
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br />
            <label>
                Enter the date you ate here
                <br />
                <input type="text" value={dateposted} onChange={(e) => setDateposted(e.target.value)} />
            </label>
            <br />
            <label>
                Leave a rating out of 5!
                <br />
                <input type="text" value={rating} onChange={(e) => setRating(e.target.value)} />
            </label>
            <br />
            <br />
            <input type="submit" value="Post" onClick={() => setPost(true)} />
            </form>
            <h1>{display}</h1>
        </div>
    )
}

export default Review;
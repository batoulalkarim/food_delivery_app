import React, { useState } from 'react';

function Auth({setCurrentUser}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    const [errors, setErrors] = useState([])

    function onSubmit(e) {
        e.preventDefault()
        const user = {
            username, 
            password
        }
        fetch(`/users`, {
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(setCurrentUser)
            } else {
                res.json().then(e => setErrors(Object.entries(e.error).flat()))
            }
        })
    }
    return(
        <form onSubmit={onSubmit}>
            <label>
                Username
                <br />
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password
                <br />
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <input type="submit" value="Sign up" />
            <input type="submit" value="Login" onClick={() => setLogin(true)} />
            </form>
    )
}

export default Auth;
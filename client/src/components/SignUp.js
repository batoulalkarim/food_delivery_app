import React, { useState } from 'react';

function SignUp({setCurrentUser}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const [errors, setErrors] = useState([])

    function onSubmit(e) {
        e.preventDefault()
        const user = {
            username, 
            password,
            name,
            email
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
                Name: 
                <br />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
                Email:
                <br />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Username
                <br />
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br />
            <label>
                Password
                <br />
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <input type="submit" value="Sign up" />
            {/* <input type="submit" value="Login" onClick={() => setLogin(true)} /> */}
            </form>
    )
}

export default SignUp;
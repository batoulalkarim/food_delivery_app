import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

function LoginForm({setCurrentUser}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    // const navigate = useNavigate();

    function onSubmit(e) {
        e.preventDefault()
        setIsLoading(true)
        const user = {
            username, 
            password
            // name,
            // email
        }
        fetch(`/login`, {
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => {
            setIsLoading(false);
            if(res.ok) {
                console.log(setCurrentUser)
                res.json().then(setCurrentUser)
                // navigate('/')
            } else {
                res.json().then(e => setErrors(Object.entries(e.error).flat()))
            }
        })
    }

    return(
        <div>
            <h1>Welcome Back</h1>
            {/* <h2>{typeof(setCurrentUser)}</h2> */}
        <form onSubmit={onSubmit}>
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
    <input type="submit" value="Login" onClick={() => setLogin(true)} />
    </form>
    </div>
    )
}

export default LoginForm;
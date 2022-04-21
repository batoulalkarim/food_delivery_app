import { useState } from 'react';
import LoginForm from './LoginForm';
import SignUp from './SignUp';

function Login({ setCurrentUser }){
    const [showLogin, setShowLogin] = useState(true);


    return(
        <div className="loginbg">
            <h1 className="logintitlefs">Flavor Savior</h1>
            {showLogin ? (
                <>
                <LoginForm setCurrentUser={setCurrentUser}/>
                <br />
                <p className="logintoggle">
                    Don't have an account? &nbsp;
                    <button onClick={() => setShowLogin(false)}>
                        Sign Up 
                    </button>
                </p>
                </>
            ) : (
                <>
                <SignUp setCurrentUser={setCurrentUser}/>
                <br />
                <p className="logintoggle">
                    Already have an account? &nbsp;
                    <button onClick={() => setShowLogin(true)}>
                        Log In
                    </button>
                </p>
                </>
            )}
            
        </div>
    )
}

export default Login;
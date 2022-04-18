import { useState } from 'react';
import LoginForm from './LoginForm';
import SignUp from './SignUp';

function Login(){
    const [showLogin, setShowLogin] = useState(true);


    return(
        <div>
            <h1>Flavor Savior</h1>
            {showLogin ? (
                <>
                <LoginForm />
                <br />
                <p>
                    Don't have an account? &nbsp;
                    <button onClick={() => setShowLogin(false)}>
                        Sign Up 
                    </button>
                </p>
                </>
            ) : (
                <>
                <SignUp />
                <br />
                <p>
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
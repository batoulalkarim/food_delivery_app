import { useState } from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);
    
    return(
        <div>
            <h1>Login</h1>
            {showLogin ? (
                <>
                <LoginForm onLogin={onLogin} />
                <p>
                    Don't have an account? &nbsp;
                    <button onClick={() => setShowLogin(false)}>
                        Sign Up 
                    </button>
                </p>
                </>
            ) : (
                <>
                <SignUpForm onLogin={onLogin} />
                <p>
                    Already have an account? &nbsp;
                    <button onClick={() => setShowLogin(true)}>
                        Log In 
                    </button>
                </p>
                </>
            )}
        </div>
    );
}

export default Login;
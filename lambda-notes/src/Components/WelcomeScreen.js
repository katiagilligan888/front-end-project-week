import React from 'react'; 
import { Link } from 'react-router-dom'; 

const WelcomeScreen = () => {
    return (
        <div className = "welcome-screen">
            <h1>Lambda Notes</h1>
            <h2> A place to keep track of all school notes </h2>
            <div className = "loginAndSignup">
                <div className = "button-login">Login</div>
                <div className = "button-signup">SignUp</div>
            </div>
        </div>
    )
}

export default WelcomeScreen; 
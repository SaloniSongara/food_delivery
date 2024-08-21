import React, { useState } from 'react';
import axios from 'axios';
import deliveryboy from '../assets/images/food-delivery-5217579_1280.png';

export default function LoginSignup() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);

    const toggleForm = () => {
        setIsSignIn(!isSignIn);
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        try {
            const response = await axios.post('http://localhost:8080/api/signin', { username, password });
            alert('Signed in successfully!');
            console.log(response.data);
            
        } catch (error) {
            alert('Sign in failed!');
            console.error(error);
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        const fullname = e.target.fullname.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmpassword = e.target.confirmpassword.value;

        console.log("******", fullname, phone, email, password, confirmpassword);
        

        if (password !== confirmpassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/signup', {
                 fullname,
                 phone,
                 email,
                 password,
                confirmpassword,
                });
            setIsSuccess(true);
            setIsSignIn(false);
            alert('Signed up successfully!');
            console.log(response.data);
            // handle successful sign-up, e.g., redirect or store user data
        } catch (error) {
            alert('Sign up failed!');
            console.error(error);
        }
    };

    return (
        <div className="side-by-side-container">
            <div className="image-container">
                <img src={deliveryboy} alt="deliveryboy" className="cook-image" />
            </div>
            <div className="form-container">
                <div className={`frame ${!isSignIn && !isSuccess ? 'frame-long' : ''} ${isSuccess ? 'frame-short' : ''}`}>
                    <div className={`nav ${isSuccess ? 'nav-up' : ''}`}>
                        <ul className="links">
                            <li className={isSignIn ? 'signin-active' : 'signin-inactive'}>
                                <a href="#" className="btn" onClick={toggleForm}>Sign in</a>
                            </li>
                            <li className={!isSignIn ? 'signup-active' : 'signup-inactive'}>
                                <a href="#" className="btn" onClick={toggleForm}>Sign up</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <form className={`form-signin ${!isSignIn ? 'form-signin-left' : ''}`} onSubmit={handleSignIn}>
                            <label htmlFor="username">Username</label>
                            <input className="form-styling" type="text" name="username" required />
                            <label htmlFor="password">Password</label>
                            <input className="form-styling" type="password" name="password" required />
                            <div className="btn-animate">
                                <button type="submit" className="btn-signin">Sign in</button>
                            </div>
                        </form>

                        <form className={`form-signup ${isSignIn ? '' : 'form-signup-left'}`} onSubmit={handleSignUp}>
                            <label htmlFor="fullname">Full name</label>
                            <input className="form-styling" type="text" name="fullname" required />
                            <label htmlFor="phone">Phone</label>
                            <input className="form-styling" type="number" name="phone" required />
                            <label htmlFor="email">Email</label>
                            <input className="form-styling" type="email" name="email" required />
                            <label htmlFor="password">Password</label>
                            <input className="form-styling" type="password" name="password" required />
                            <label htmlFor="confirmpassword">Confirm password</label>
                            <input className="form-styling" type="password" name="confirmpassword" required />
                            <button type="submit" className="btn-signup">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

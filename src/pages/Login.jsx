import React, { useState } from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./styles/Login.css";

const Login = () => {
    const [isSignup, setIsSignup] = useState(false);

    const toggleForm = () => {
        setIsSignup(!isSignup);
    };

    return (
        <>
            <Navbar />
            <div className="login-container">
                <div className={`cont ${isSignup ? 's-signup' : ''}`}>
                    <div className="form sign-in">
                        <h2>Sign In</h2>
                        <label>
                            <span>Email Address</span>
                            <input type="email" name="email" />
                        </label>
                        <label>
                            <span>Password</span>
                            <input type="password" name="password" />
                        </label>
                        <button className="submit" type="button">Sign In</button>

                        <div className="or-p">
                            <p>Or Sign In with :</p>
                        </div>

                        <div className="social-media">
                            <ul>
                                <li><img src="./img/FB.png" alt="Facebook" /></li>
                                <li><img src="./img/X.png" alt="Twitter" /></li>
                                <li><img src="./img/LI.png" alt="LinkedIn" /></li>
                                <li><img src="./img/IG.png" alt="Instagram" /></li>
                            </ul>
                        </div>
                    </div>

                    <div className="sub-cont">
                        <div className="img">
                            <div className="img-text m-up">
                                <h1>New Here?</h1>
                                <p>Sign Up & Discover</p>
                            </div>
                            <div className="img-text m-in">
                                <h1>One Of Us?</h1>
                                <p>Just Sign In</p>
                            </div>
                            <div className="img-btn" onClick={toggleForm}>
                                <span className="m-up">Sign Up</span>
                                <span className="m-in">Sign In</span>
                            </div>
                        </div>
                        <div className="form sign-up">
                            <h2>Sign Up</h2>
                            <label>
                                <span>Name</span>
                                <input type="text" />
                            </label>
                            <label>
                                <span>Email</span>
                                <input type="email" />
                            </label>
                            <label>
                                <span>Password</span>
                                <input type="password" />
                            </label>
                            <label>
                                <span>Confirm Password</span>
                                <input type="password" />
                            </label>
                            <button type="button" className="submit">Sign Up Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;

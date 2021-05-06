import React from "react";
// import { Link } from "react-router-dom"
import './sign-up.scss';
import Vector from '../../Assets/Vector.png'




class SignUp extends React.Component{
    render() {
        return (
            <div className="sign-up">
                <div className="">
                <div className="container">
                        <h1 className="sign-in-up-header text-center">Sign Up</h1>
                        <form action="">
                            <div className="input-field">
                                <input
                                type="text"
                                name="text"
                                placeholder="Full Name"
                                />
                            </div>
                            <div className="input-field">
                                <input
                                type="email"
                                name="email"
                                placeholder="johndoe@gmail.com"
                                />
                            </div>
                            <div className="input-field">
                                <input
                                type="text"
                                name="text"
                                placeholder="Jos, Plateau"
                                />
                            </div>
                            <div className="input-field">
                                <input
                                type="password"
                                name="password"
                                placeholder="**********"
                                id="password"
                                />
                                <img src={Vector} alt="" />
                            </div>
                            <div className="input-field">
                                <input
                                type="password"
                                name="password"
                                placeholder="Comfirm Password"
                                id="password"
                                />
                                <img src={Vector} alt="" />
                            </div>
                            <div className="submit">
                                <a href="#">
                                <input type="submit" name="submit" value="Register" />
                                </a>
                            </div>
                        </form>
                        <p className="text-center">
                        Already have an account?{" "}
                        <a href="#" className="last-child">
                            Sign In here
                        </a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp

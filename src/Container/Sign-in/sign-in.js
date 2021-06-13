import React from "react";
import { Link } from "react-router-dom"
import './sign-in.scss';
import Vector from '../../Assets/Vector.png'




class SignIn extends React.Component{
    render() {
        return (
            <div className="sign-in">
                <div className="">
                <div className="container">
                        <h1 className="sign-in-up-header text-center">Sign In</h1>
                        <form action="">
                        <div className="input-field">
                            <input
                            type="text"
                            name="text"
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
                        <div className="submit">
                            <Link to="/body">
                                <input type="submit" name="submit" value="Login" />
                            </Link>
                        </div>
                        </form>
                        <p className="text-center p-one">
                        <a href="#">forgot password?</a>
                        </p>
                        <p className="text-center">
                        Don’t have an account?{" "}
                        <Link to="/sign-up" className="last-child">
                            Create an account
                        </Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn

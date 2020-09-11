import React from "react"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <section className="container">
            <section className="main">
                <div className="main__logo">
                    <img src="https://i.imgur.com/nqsC2vJ.png" alt="logo" />
                    <h1>Login</h1>
                    <span>Sign in to your account</span>
                </div>
                <section className="main__form">
                    <form className="main__form__signup" action="">
                        <input type="text" placeholder="User Name" />
                        <input type="password" placeholder="Password" />
                    </form>
                    <Link className="main__form--btn" to="/profile">
                        Log in
                    </Link>
                    <a className="main__form--link" href="#">
                        Forgot account?
                    </a>
                    <Link className="main__signBtn" to="/signup">
                        Register New Account
                    </Link>
                </section>
            </section>
            <section className="right-image">
                <img src="https://i.imgur.com/vFFH0aV.jpg" alt="Cook" />
                <h2>Discover a new recipes in front of your door</h2>
            </section>
        </section>
    )
}

export default Login

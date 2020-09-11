import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"

const SignUp = () => {
    return (
        <section className="container">
            <section className="main">
                <div className="main__logo">
                    <img src="https://i.imgur.com/nqsC2vJ.png" alt="logo" />
                    <h1>Sign up for Cook your Food</h1>
                    <small>
                        Sign up with your social media account or email address
                    </small>
                </div>
                <div className="main__social">
                    <a href="#">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faGoogle} />
                    </a>
                </div>
                <div className="main__divisor">
                    <span>or</span>
                </div>
                <section className="main__form">
                    <form className="main__form__signup" action="">
                        <input type="text" placeholder="Full Name" />
                        <input type="text" placeholder="Email Address" />
                        <input type="text" placeholder="Password" />
                        <input type="text" placeholder="Confirm Password" />
                    </form>
                    <p>
                        By creating an account, you agree to our Terms of Use
                        and privacy policy
                    </p>
                    <Link className="main__form--btn" to="#">
                        Sign Up
                    </Link>
                    <p>
                        Already have an account?<Link to="/login">Log in</Link>
                    </p>
                </section>
            </section>
            <section className="right-image">
                <img src="https://i.imgur.com/vFFH0aV.jpg" alt="Cook" />
                <h2>Discover a new recipes in front of your door</h2>
            </section>
        </section>
    )
}

export default SignUp

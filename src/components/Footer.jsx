import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer__menu">
                <nav className="footer__menu--links">
                    <Link to="/recipes">Recipes</Link>
                    <a href="#/faq">FAQ</a>
                    <a href="#/plans">Plans</a>
                </nav>
            </section>
            <section className="footer__social">
                <div className="footer__social--icons">
                    <span>Follow us on the networks!</span>
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
            </section>
            <span className="footer__bottom">
                <small className="footer__bottom--small">
                    LetsCook - Food Market © 2020
                </small>
            </span>
        </footer>
    )
}

export default Footer

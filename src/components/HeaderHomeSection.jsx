import React from "react"
import { Link } from "react-router-dom"

const HeaderHomeSection = () => {
    return (
        <div className="header-home">
            <nav className="options-home">
                <ul>
                    <li>
                        <Link to="/recipes">What we offer</Link>
                    </li>
                    <li>
                        <Link to="/login">Log in</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderHomeSection

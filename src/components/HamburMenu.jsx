import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import SearchInput from "../components/SearchInput"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

const HamburMenu = ({ show }) => {
    const showHambur = () => {
        if (show) {
            return "show"
        } else {
            return ""
        }
    }

    return (
        <div className={`header__menu__hambur ${showHambur()} `}>
            <div className="header__menu__hambur__top">
                <img src="https://i.imgur.com/nqsC2vJ.png" alt="small-logo" />
                <FontAwesomeIcon
                    onClick={""}
                    className="header__menu__hambur__top--fa"
                    icon={faTimes}
                />
            </div>
            <div className="header__menu__hambur--search">
                <SearchInput />
            </div>
            <nav className="header__menu__hambur__menu">
                <a href="#">Account</a>
                <a href="#">Cart</a>
                <Link to="/recipes">Recipes</Link>
                <a href="#breakfast">Breakfasts</a>
                <a href="#lunches">Lunches</a>
                <a href="#dinners">Dinners</a>
                <a href="#">Plans</a>
                <a href="#">FAQ</a>
            </nav>
        </div>
    )
}

export default HamburMenu

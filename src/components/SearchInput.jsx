import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const SearchInput = () => {
    return (
        <>
            <input
                className="search__input"
                type="text"
                placeholder="Look for your recipe"
            />
            <FontAwesomeIcon className="search__input--lens" icon={faSearch} />
        </>
    )
}

export default SearchInput

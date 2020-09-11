import React from "react"

import SearchInput from "./SearchInput"

const MainHomeSection = () => {
    return (
        <div className="main-home">
            <h1>Craving something?</h1>
            <h3>Let's Cook!</h3>
            <div className="search-bar">
                <SearchInput />
            </div>
        </div>
    )
}

export default MainHomeSection

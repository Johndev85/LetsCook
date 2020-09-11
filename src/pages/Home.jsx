import React from "react"
import HeaderHomeSection from "../components/HeaderHomeSection.jsx"
import MainHomeSection from "../components/MainHomeSection.jsx"
import ImagesSection from "../components/ImagesSection"

const Home = () => {
    return (
        <main className="body-home">
            <ImagesSection />
            <HeaderHomeSection />
            <MainHomeSection />
        </main>
    )
}

export default Home

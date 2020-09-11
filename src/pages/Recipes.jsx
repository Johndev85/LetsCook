import React from "react"
import { Link } from "react-router-dom"
import { CardItem } from "../components/CardItem"
import Layout from "../components/Layout"

const urlRecipes = "http://161.35.124.63:3000/api/maestro"
const urlBreakFast = "http://161.35.124.63:3000/api/maestro/type/breakfast"
const urlLunch = "http://161.35.124.63:3000/api/maestro/type/lunch"
const urlDinners = "http://161.35.124.63:3000/api/maestro/type/dinner"

const Recipes = () => {
    return (
        <Layout>
            <section className="main">
                <div className="main__title">
                    <h1>Recipes of the week</h1>
                    <span>01/08 to 10/08</span>
                </div>

                <section className="main__carousel">
                    <h2 className="main__carousel--subtitles" id="breakfast">
                        BREAKFAST
                    </h2>

                    <div className="main__carousel__cards">
                        <CardItem url={urlBreakFast} />
                    </div>

                    <h2 className="main__carousel--subtitles" id="lunches">
                        LUNCHES
                    </h2>

                    <div className="main__carousel__cards">
                        <CardItem url={urlLunch} />
                    </div>

                    <h2 className="main__carousel--subtitles" id="dinners">
                        DINNERS
                    </h2>

                    <div className="main__carousel__cards">
                        <CardItem url={urlDinners} />
                    </div>

                    <section className="main__bottom">
                        <div className="main__bottom--center">
                            <Link to="/plans">
                                Do you want to receive the ingredients at HOME?
                            </Link>
                        </div>
                    </section>
                </section>
            </section>
        </Layout>
    )
}

export default Recipes

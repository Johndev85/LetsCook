import React from "react"
import Layout from "../components/Layout"

const RecipeDetails = (props) => {
    const recipeId = { id: props.location.state }
    const recipes = { items: props.location.state }

    console.log(recipeId.id.idRecipe)
    console.log(recipes.items.listRecipes)

    return recipes.items.listRecipes.map((recipe) => {
        if (recipe.num_id === recipeId.id.idRecipe) {
            return (
                <Layout>
                    <section className="main-details">
                        <section className="main-image">
                            <img src={recipe.url_image} alt={recipe.des_name} />
                        </section>
                        <section className="main-introduction">
                            <h1>{recipe.des_name}</h1>
                            <div className="main_introduction__people">
                                2
                                <img
                                    src="https://i.imgur.com/gPvXjmi.png"
                                    className="main-introduction__peopleIcon"
                                    alt=""
                                />
                            </div>
                            <div className="main_introduction__time">
                                <p>{recipe.list_tags.split(",")[0]}</p>

                                <img
                                    src="https://i.imgur.com/KvO2QIm.png"
                                    className="main-introduction__timerIcon"
                                    alt="timer-icon"
                                />
                            </div>
                            <div className="main-introduction--description">
                                <p>{recipe.des_description}</p>
                            </div>
                            <div className="main-introduction__loveIcon"></div>
                            <div className="main-introduction__shareIcon"></div>
                        </section>
                        <section className="main-ingredients">
                            <h2>Ingredients</h2>
                            <div className="main-ingredients__container1">
                                <ul className="main-ingredientes__name">
                                    {recipe.list_ingredients
                                        .split(",")
                                        .map((item) => {
                                            return <li>{item}</li>
                                        })}
                                </ul>
                            </div>
                        </section>
                        <section className="main-steps">
                            <h2>Steps</h2>
                            <div className="main-steps__container">
                                <ol>
                                    {recipe.list_steps
                                        .split(",")
                                        .map((item) => {
                                            return <li>{item}</li>
                                        })}
                                </ol>
                            </div>
                        </section>
                        <section className="main-rate">
                            <h2>Rater this recipe</h2>
                            <div className="main-rate__icons">
                                <a href="" className="main-rate__icon"></a>
                                <a href="" className="main-rate__icon"></a>
                                <a href="" className="main-rate__icon"></a>
                                <a href="" className="main-rate__icon"></a>
                                <a href="" className="main-rate__icon"></a>
                            </div>
                        </section>
                        <section className="main-addTo">
                            <button>ADD TO CART</button>
                        </section>
                    </section>
                </Layout>
            )
        }
    })
}

export default RecipeDetails

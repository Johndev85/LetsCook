import React from "react"
import { Link } from "react-router-dom"
import Layout from "../components/Layout"

const RecipeDetails = () => {
    return (
        <Layout>
            <section className="main-details">
                <section className="main-image">
                    <img
                        src="https://i.imgur.com/9Ha7jrT.png"
                        alt="This is the image of the recipe"
                    />
                </section>
                <section className="main-introduction">
                    <h1>Introduction</h1>
                    <h2>Chicken Caesar Salad</h2>
                    <div className="main_introduction__people">
                        2
                        <img
                            src="https://i.imgur.com/gPvXjmi.png"
                            className="main-introduction__peopleIcon"
                            alt=""
                        />
                    </div>
                    <div className="main_introduction__time">
                        20 min.
                        <img
                            src="https://i.imgur.com/KvO2QIm.png"
                            className="main-introduction__timerIcon"
                            alt=""
                        />
                    </div>
                    <p>
                        A classic plate in everywhere. It’s delicious, easy and
                        quick to made. No doubt that it has to be a fundamental
                        in your repertoire. Unlock the next level adding
                        chicken! Enjoy it.
                    </p>
                    <div className="main-introduction__loveIcon">
                        <a href=""></a>
                    </div>
                    <div className="main-introduction__shareIcon">
                        <a href=""></a>
                    </div>
                </section>
                <section className="main-ingredients">
                    <div className="main-ingredients__container1">
                        <div className="main-ingredients__image"></div>
                        <p className="main-ingredientes__name">Letucce</p>
                        <p className="main-ingredients__quantity">150 g.</p>
                    </div>
                    <div className="main-ingredients__container2">
                        <div className="main-ingredients__image"></div>
                        <p className="main-ingredientes__name">
                            Chicken breast
                        </p>
                        <p className="main-ingredients__quantity">One piece</p>
                    </div>
                    <div className="main-ingredients__container3">
                        <div className="main-ingredients__image"></div>
                        <p className="main-ingredientes__name">Parmesan</p>
                        <p className="main-ingredients__quantity">One cup</p>
                    </div>
                    <div className="main-ingredients__container4">
                        <div className="main-ingredients__image"></div>
                        <p className="main-ingredientes__name">Garlic</p>
                        <p className="main-ingredients__quantity">One piece</p>
                    </div>
                    <div className="main-ingredients__container5">
                        <div className="main-ingredients__image"></div>
                        <p className="main-ingredientes__name">Lemon juice</p>
                        <p className="main-ingredients__quantity">10 ml.</p>
                    </div>
                    <div className="main-ingredients__container6">
                        <div className="main-ingredients__image"></div>
                        <p className="main-ingredientes__name">Water</p>
                        <p className="main-ingredients__quantity">10 ml.</p>
                    </div>
                    <div className="main-ingredients__container7">
                        <div className="main-ingredients__image"></div>
                        <p className="main-ingredientes__name">Salt</p>
                        <p className="main-ingredients__quantity">10g</p>
                    </div>
                </section>
                <section className="main-steps">
                    <h1>Steps</h1>
                    <div className="main-steps__container">
                        <p>
                            In a bowl, pour a couple of tablespoons of olive
                            oil, a minced clove of garlic and a pinch of salt.
                            Stir and pour this dressing over the pieces of bread
                            so that they are well impregnated.
                        </p>
                    </div>
                    <div className="main-steps__container">
                        <p>
                            Cook the grilled chicken with a pinch of salt in a
                            pan with a little olive oil. Once it is cooked cut
                            it into pieces or strips, as you prefer. Wash the
                            lettuce and cut in pieces. Place it in your salad
                            bowl.
                        </p>
                    </div>
                    <div className="main-steps__container">
                        <p>
                            Add half the chicken pieces, half the indicated
                            amount of the grated Parmesan cheese and the pieces
                            of bread. Pour half of the dressing you have
                            prepared and mix gently.
                        </p>
                    </div>
                    <div className="main-steps__container">
                        <p>
                            Finish adding the other half of the ingredients and
                            the rest of the dissing to the salad. Serve at the
                            tabe and enjoy your salad!
                        </p>
                    </div>
                </section>
                <section className="main-rate">
                    <h1>Rater this recipe</h1>
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

export default RecipeDetails

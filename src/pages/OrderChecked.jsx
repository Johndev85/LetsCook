import React from "react"
import Item from "../components/Item"
import Layout from "../components/Layout"

const OrderChecked = () => {
    return (
        <Layout>
            <section className="body-checked">
                <div className="background-capa-1"></div>
                <div className="background-capa-2"></div>
                <div className="background-capa-3"></div>

                <div className="header-checked">
                    <nav className="nav1">
                        <ul>
                            <li>OPTION 1</li>
                            <li>OPTION 2</li>
                        </ul>
                    </nav>
                    <picture className="logo"></picture>
                    <div className="second-logo"></div>
                    <nav className="nav2">
                        <ul>
                            <li>OPTION 3</li>
                            <li>OPTION 4</li>
                        </ul>
                    </nav>
                    <h1 className="title">CONFIRM YOUR ORDER</h1>
                    <h1 className="second-title">¡ORDER CHECKED!</h1>
                    <h1 className="third-title">ORDER DATAILS</h1>
                    <h1 className="notify-message-on-header">
                        We’ll notify you as soon we ship your order
                    </h1>
                    <hr className="title-divisor" size="2px" color="#264653" />
                </div>
                <main className="main-checked">
                    <h1 className="notify-message">
                        We’ll notify you as soon we ship your order
                    </h1>
                    <div className="main-button">
                        <a href="#">ORDER DETAILS</a>
                    </div>

                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </main>
                <section className="footer-checked">
                    <div className="second-logo-footer"></div>
                    <h1 className="second-title-footer">¡ORDER CHECKED!</h1>
                    <h1 className="notify-message-on-header-footer">
                        We’ll notify you as soon we ship your order
                    </h1>
                    <hr
                        className="title-divisor-footer"
                        size="2px"
                        color="#264653"
                    />
                    <div className="premium">
                        <a href="http://">LET'S MEET OUR PREMIUM PLAN</a>
                    </div>
                    <p className="home">
                        <a href="">HOME</a>
                    </p>
                    <section className="total">
                        <p>TOTAL</p>
                        <p>$ XXXX</p>
                    </section>
                    <section className="eldivisor">
                        <hr size="2px" color="#dbe4ee" />
                    </section>
                    <section className="choices">
                        <p>ADD RECIPES</p>
                        <hr
                            size="2px"
                            color="#dbe4ee"
                            width="40px"
                            className="choices-divisor"
                        />
                        <p>PAY</p>
                    </section>
                </section>
            </section>
        </Layout>
    )
}

export default OrderChecked

import React from "react"
import Item from "../components/Item"
import Layout from "../components/Layout"

const OrderConfirmation = () => {
    return (
        <Layout>
            <section className="body-confirmation">
                <div className="background-capa-1"></div>
                <div className="background-capa-2"></div>
                <div className="background-capa-3"></div>

                <header className="header-confirmation">
                    <nav className="nav1">
                        <ul>
                            <li>OPTION 1</li>
                            <li>OPTION 2</li>
                        </ul>
                    </nav>
                    <picture className="logo"></picture>
                    <nav className="nav2">
                        <ul>
                            <li>OPTION 3</li>
                            <li>OPTION 4</li>
                        </ul>
                    </nav>
                    <h1 className="title">CONFIRM YOUR ORDER</h1>
                    <hr className="title-divisor" />
                </header>

                <main className="main-confirmation">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </main>

                <footer className="footer-confirmation">
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
                </footer>
            </section>
        </Layout>
    )
}

export default OrderConfirmation

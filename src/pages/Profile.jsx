import React from "react"
import { Link } from "react-router-dom"
import Layout from "../components/Layout"

const Profile = () => {
    return (
        <Layout>
            <section className="information__container">
                <section className="information__AvatarNameEmail">
                    <img
                        src="https://i.imgur.com/h2W3BCh.png"
                        alt="Profile Image"
                    />
                    <a href="/" className="information__Name">
                        Armando García
                    </a>
                    <a href="/" className="information__email">
                        armandobfmv@gmail.com
                    </a>
                </section>

                <section className="information__addresses">
                    <h2>My Addresses</h2>
                    <p>P Sherman, Street Wallaby 42, Sydney</p>
                </section>

                <section className="information__payment">
                    <h2>Payment Methods</h2>
                    <div className="information__payment__container">
                        <img
                            src="../styles/assets/icons/visa.svg"
                            alt="Payment Method Logo"
                        />
                        <div className="information__payment__number">#</div>
                        <div className="information__payment__due">
                            Due Date: 01/2028"
                        </div>
                    </div>
                </section>

                <section className="information__suscription">
                    <h2>Suscription Information</h2>
                    <p>Premium subscription activated</p>
                    <p>
                        Valid until: <strong>September/29/2020</strong>
                    </p>
                </section>

                <section className="information__ordersHistory">
                    <h2>Orders History</h2>
                    <table>
                        <tbody>
                            <tr>
                                <th>Order ID</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>

                            <tr>
                                <td>
                                    <a>ID #</a>
                                </td>
                                <td>DDMMAAAA</td>
                                <td>$</td>
                                <td>In Progress/Completed</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </section>
        </Layout>
    )
}

export default Profile

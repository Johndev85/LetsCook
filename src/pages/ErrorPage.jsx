import React from "react"
import { Link } from "react-router-dom"
import Layout from "../components/Layout"

const ErrorPage = () => {
    return (
        <Layout>
            <section className="notFound">
                <div className="notFound__message">
                    <img src="https://i.imgur.com/94OgSeU.jpg" alt="404" />
                    <h2>Oops!</h2>
                    <h1> Error 404</h1>
                    <h3>This is not the web page you are looking for.</h3>
                    <Link className="notFound__message--return" to="/">
                        <span> Back to the main page </span>
                    </Link>
                </div>
            </section>
        </Layout>
    )
}

export default ErrorPage

import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Recipes from "./pages/Recipes"
import Profile from "./pages/Profile"
import RecipeDetails from "./pages/RecipeDetails"
import OrderConfirmation from "./pages/OrderConfirmation"
import OrderChecked from "./pages/OrderChecked"
import Payments from "./pages/Payments"
import ErrorPage from "./pages/ErrorPage"

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/recipes" component={Recipes} />
                <Route path="/recipe-detail/:id" component={RecipeDetails} />
                <Route exact path="/payments" component={Payments} />
                <Route
                    exact
                    path="/order-confirmation"
                    component={OrderConfirmation}
                />
                <Route exact path="/order-checked" component={OrderChecked} />
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default App

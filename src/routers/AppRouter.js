import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import EditExpensePage from "../components/EditExpense";
import AddExpensePage from "../components/AddExpensePage";
import { AddHelpPage } from "../components/AddHelpPage";
import { ExpenseDashboardPage } from "../components/ExpenseDashboardPage";
import { NotFoundPage } from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute
                    path="/"
                    component={LoginPage}
                    exact={true}
                ></PublicRoute>
                <PrivateRoute
                    path="/dashboard"
                    component={ExpenseDashboardPage}
                ></PrivateRoute>
                <PrivateRoute
                    path="/create"
                    component={AddExpensePage}
                ></PrivateRoute>
                <PrivateRoute
                    path="/edit/:id"
                    component={EditExpensePage}
                ></PrivateRoute>
                <Route path="/help" component={AddHelpPage}></Route>
                <Route component={NotFoundPage}></Route>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;

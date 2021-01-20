import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EditExpensePage from "../components/EditExpense";
import AddExpensePage from "../components/AddExpensePage";
import { AddHelpPage } from "../components/AddHelpPage";
import { ExpenseDashboardPage } from "../components/ExpenseDashboardPage";
import { NotFoundPage } from "../components/NotFoundPage";
import { Header } from "../components/Header";
import Login from "../components/login";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Login} exact={true}></Route>
                <Route
                    path="/dashboard"
                    component={ExpenseDashboardPage}
                ></Route>
                <Route path="/create" component={AddExpensePage}></Route>
                <Route path="/edit/:id" component={EditExpensePage}></Route>
                <Route path="/help" component={AddHelpPage}></Route>
                <Route component={NotFoundPage}></Route>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;

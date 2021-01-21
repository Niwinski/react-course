import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";

const PrivateRoute = ({ isAuth, component: Component, ...rest }) => (
    <div>
        <Header />
        <Route
            {...rest}
            component={(props) =>
                isAuth ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    </div>
);

const mapStateToProps = (state) => ({
    isAuth: !!state.auth.uid,
});
export default connect(mapStateToProps)(PrivateRoute);

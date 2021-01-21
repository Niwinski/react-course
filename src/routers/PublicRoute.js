import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ isAuth, component: Component, ...rest }) => (
    <div>
        <Route
            {...rest}
            component={(props) =>
                !isAuth ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/dashboard" />
                )
            }
        />
    </div>
);

const mapStateToProps = (state) => ({
    isAuth: !!state.auth.uid,
});
export default connect(mapStateToProps)(PublicRoute);

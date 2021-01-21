import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import { firebase } from "./firebase/firebase";
import { login, logout } from "./actions/auth";

const store = configureStore();

// console.log(store.getState());

// store.subscribe(() => {
//     const state = store.getState();
//     const visible = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visible);
// });

// const e1 = store.dispatch(
//     addExpense({ description: "BILL: water", amount: 95000, createdAt: 100 })
// );

// store.dispatch(
//     addExpense({ description: "rent", amount: 9500, createdAt: 1000 })
// );
// const e2 = store.dispatch(
//     addExpense({ description: "gas bill", amount: 2200, createdAt: 100 })
// );

// store.dispatch(setTextFilter("water"));
// setTimeout(() => {
//     store.dispatch(setTextFilter("bill"));
// }, 3000);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

// const Info = (props) => (
//     <div>
//         <h1>Hello: {props.info}</h1>
//         <p>adsfa</p>
//     </div>
// );
// const requireAuth = (Component) => {
//     return (props) => (
//         <div>
//             {props.authxx ? (
//                 <Component {...props} />
//             ) : (
//                 <div>
//                     <h1>Not authenticated props.info</h1>
//                     <p>boo</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// const AuthInfo = requireAuth(Info);

// ReactDOM.render(
//     <AuthInfo info="foobar" authxx={false}></AuthInfo>,
//     document.getElementById("app")
// );

ReactDOM.render(<p>loading</p>, document.getElementById("app"));

const hasRendered = false;
const RenderApp = () => {
    ReactDOM.render(jsx, document.getElementById("app"));
};

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));

        store.dispatch(startSetExpenses()).then(() => {
            RenderApp();
        });

        console.log("log in");
        if (history.location.pathname === "/") {
            history.push("/dashboard");
        }
    } else {
        store.dispatch(logout());
        console.log("log out");
        RenderApp();
        history.push("/");
    }
});

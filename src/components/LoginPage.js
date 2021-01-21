import React from "react";
import { connect } from "react-redux";
import { startLoginAuth } from "../actions/auth";

// export class Login extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log(this);
//         this.state = {
//             email: "",
//             password: "",
//         };
//     }
//     onSubmit(e) {
//         console.log(this);
//         e.preventDefault();
//         this.props.history.push("/dashboard");
//     }

//     render() {
//         console.log(this);

//         return (
//             <div>
//                 <p>Please login </p>
//                 <form>
//                     <input
//                         type="text"
//                         value={this.state.email}
//                         placeholder="email"
//                         autoFocus
//                     ></input>
//                     <input
//                         type="text"
//                         value={this.state.password}
//                         placeholder="password"
//                     ></input>
//                     <button onClick={startLogin}>Go</button>
//                 </form>
//             </div>
//         );
//     }
// }

const LoginPage = ({ startLogin }) => (
    <div>
        <p>Please login </p>
        {/* <button onClick={startLogin}>Go</button> */}
        <button className="button" onClick={startLogin}>
            Login with Google
        </button>
    </div>
);

// const mapDispatchToProps = (dispatch) => ({
//     startLogin: () => dispatch(startLoginAuth),
// });

// export default connect(undefined, mapDispatchToProps)(LoginPage);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLoginAuth()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

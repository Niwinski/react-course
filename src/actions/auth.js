import { firebase, googleAuthProvider } from "../firebase/firebase";

export const login = (uid) => ({
    type: "LOGIN",
    uid,
});

export const startLoginAuth = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
        // .then(function (authData) {
        //     console.log(authData);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
    };
};

export const logout = () => ({
    type: "LOGOUT",
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "./store/reducer/RootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {  getFirebase, ReactReduxFirebaseProvider, ReduxFirestoreProvider } from "react-redux-firebase";
import {  getFirestore } from "redux-firestore";
import firebase from "./component/config/FbConfig";
import { createFirestoreInstance } from 'redux-firestore'

// import {BrowserRouter} from 'react-router-dom';

// const store = createStore(RootReducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
//     reactReduxFirebase(FbConfig),
//     reduxFirestore(FbConfig)
//   )
// );
var firebaseConfig = {
  apiKey: "AIzaSyCvD5io9zzQdP_BslW5Jq_AqcegwbpDV5A",
  authDomain: "sh-marioplan.firebaseapp.com",
  projectId: "sh-marioplan",
  storageBucket: "sh-marioplan.appspot.com",
  messagingSenderId: "395253986904",
  appId: "1:395253986904:web:06a359f1c83cea647f7c2d",
  measurementId: "G-QM0L5V4Y14"
};
const reduxDevtools =
  typeof window !== "undefined" &&
  window.__REDUX_DEVTOOLS_EXTENSION__() &&
  window.__REDUX_DEVTOOLS_EXTENSION__();
let middleware = [thunk.withExtraArgument({ getFirebase,getFirestore})];
let enhancers = [compose(applyMiddleware(...middleware),reduxDevtools)];
const store = createStore(RootReducer, ...enhancers);


const rrfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance

}

const rfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
  // createFirestoreInstance // <- needed if using firestore
}
// firebase.initializeApp(firebaseConfig)

// enhancers.push(reduxDevtools);

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <ReduxFirestoreProvider {...rfProps}>
      <App />
      </ReduxFirestoreProvider>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  // </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

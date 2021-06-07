import AuthReducer from "./AuthReducer";
import ProjectReducer from "./ProjectReducer";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";


const RootReducer = combineReducers({
  auth: AuthReducer,
  project: ProjectReducer,
  firebase:firebaseReducer,
  firestore:firestoreReducer
});

export default RootReducer;

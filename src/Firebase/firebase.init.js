import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.connfig";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;
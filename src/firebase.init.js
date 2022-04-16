// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKCWKvJs2TKuVkcVCqGAB-Ub4FHXKwE9A",
    authDomain: "tourist-guide-e4792.firebaseapp.com",
    projectId: "tourist-guide-e4792",
    storageBucket: "tourist-guide-e4792.appspot.com",
    messagingSenderId: "86511151757",
    appId: "1:86511151757:web:cf41bc5a3d4c9bd86990c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
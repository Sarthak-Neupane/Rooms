import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAz57vfS9BpUUHt-imh0HpaYxMYDQONsaA",
    authDomain: "rooms-for-you.firebaseapp.com",
    projectId: "rooms-for-you",
    storageBucket: "rooms-for-you.appspot.com",
    messagingSenderId: "826121747250",
    appId: "1:826121747250:web:12ac61e5cf79954a30f52b",
    measurementId: "G-VKJJGS7DEX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export default {
    app: app,
    analytics: analytics,
    auth: auth
}
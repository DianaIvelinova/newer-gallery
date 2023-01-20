import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import { setUserCookie } from "./userCookies";

const clientCredentials = {
  apiKey: "AIzaSyC4VnLdsFADSCi7Dti1MEq5AodjYh7J9gQ",
  authDomain: "db-new-gallery.firebaseapp.com",
  projectId: "db-new-gallery",
  storageBucket: "db-new-gallery.appspot.com",
  messagingSenderId: "688748979009",
  appId: "1:688748979009:web:52c007ccdbdfd0ba7a37c0",
  measurementId: "G-5FXRQ3HREP",
};

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/albums",
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      recaptchaParameters: {
         type: 'image', // 'audio'
         size: 'normal', // 'invisible' or 'compact'
         badge: 'bottomleft' //' bottomright' or 'inline' applies to invisible.
      },
      defaultCountry: 'BG',
      whitelistedCountries: ['+359']
   }
  ],
  callbacks: {
    signInSuccessWithAuthResult: async ({ user }, redirectUrl) => {
      user.getIdTokenResult().then((result) => {
        const userData = mapUserData(user);
        setUserCookie({ ...userData, claims: result?.claims });
        console.log({ ...userData, claims: result?.claims });
      });
    },
  },
};

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(clientCredentials);
  }
}

export { uiConfig };

import React from "react";
import firebase from "firebase/compat/app";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "firebase/compat/auth";
import { uiConfig } from "../firebase/initFirebase";
import { useUser } from "../hooks/useUser";
import Container from "react-bootstrap/Container";

/*const PrivateRoute = (Component, redirectTo = false) => {
  const Auth = (pageProps) => {
    const { user } = useUser({ redirectTo: redirectTo })

    return user ? (<Component {...pageProps} />) : (<></>)
  }

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps
  }

  return Auth
}*/

const PrivateRoute = (Component) => {
  const Auth = (pageProps) => {
    const { user } = useUser();

    return user ? (
      <Component {...pageProps} />
    ) :
    (
      <Container>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </Container>
    )
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default PrivateRoute;

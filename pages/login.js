import Container from "react-bootstrap/Container";
import React from "react";
import firebase from "firebase/compat/app";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "firebase/compat/auth"
import  { uiConfig } from "../firebase/initFirebase" 

const Login = () => { 
  return (
    <>
      <Container className="w-50 mt-5">
        <div>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      </Container>
    </>
  );
};

export default Login;

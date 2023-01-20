import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import firebase from "firebase/compat/app";
import initFirebase from "../firebase/initFirebase";
import {
  removeUserCookie,
  setUserCookie,
  getUserFromCookie,
} from "../firebase/userCookies";
import { mapUserData } from "../firebase/mapUserData";

initFirebase();

const useUser = ({ redirectTo = false, redirectIfFound = false } = {}) => {
  const [user, setUser] = useState(false);
  const router = useRouter();
  const [token, setToken] = useState();

  const logout = async () => {
    return firebase
      ?.auth()
      ?.signOut()
      .then(() => {
        router.push(redirectTo || "/");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    // Firebase updates the id token every hour, this
    // makes sure the react state and the cookie are
    // both kept up to date
    const cancelAuthListener = firebase.auth().onIdTokenChanged((user) => {
      if (user) {
        user.getIdTokenResult().then((result) => {
          setToken(result.token);
          const userData = mapUserData(user);
          const isAdmin = result?.claims?.admin ? true : false;
          let stringCookie = JSON.stringify({
            ...userData,
            claims: { admin: isAdmin },
            token: result.token
          });
          setUserCookie(stringCookie);
          setUser({ ...userData, claims: { admin: isAdmin }, token: result.token });
        });
      } else {
        removeUserCookie();
        setUser();
      }
    });

    const userFromCookie = getUserFromCookie();
    setUser(userFromCookie);

    if (
      (redirectTo && !redirectIfFound && !userFromCookie && !user) ||
      (redirectIfFound && userFromCookie && user)
    ) {
      router.push(redirectTo);
      return { user: false, logout };
    }

    return () => {
      cancelAuthListener();
    };
  }, []);

  return { user, logout, token };
};

export { useUser };

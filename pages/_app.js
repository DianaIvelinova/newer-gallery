import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
        {<Header />}
        <Component {...pageProps} />
        {/*<PrivateRoute path="/login" exact component={Login} />*/}
        {/*<PrivateRoute path="/profile" exact component={Profile} />*/}
        {/*<PrivateRoute path="/logout" exact component={Logout} />*/}
        {<Footer />}
    </>
  );
}

export default MyApp;

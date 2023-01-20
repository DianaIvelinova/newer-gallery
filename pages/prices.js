import React from "react";
import Container from "react-bootstrap/Container";

const Prices = () => {
  return (
    <>
      <Container>
        <div className=" d-flex flex-column min-vh-100">
          <div className="text-center mb-5 text-black">
            <div className="row">
              <div className="col-lg-7 mx-auto mt-4">
                <h1>Pricing table</h1>
                <p>
                  This is a general pricing table for albums
                </p>
              </div>
            </div>
          </div>

          <div className="row text-center align-items-end">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="bg-white p-5 rounded-lg shadow">
                <h1 className="h6 text-uppercase font-weight-bold mb-4">Basic</h1>
                <h2 className="h1 font-weight-bold">
                  $9
                  <span className="text-small font-weight-normal ml-2">/ month</span>
                </h2>

                <div className="custom-separator my-4 mx-auto bg-primary"></div>

                <ul className="list-unstyled my-5 text-small text-left">
                  <li className="mb-3">
                    <i className="mr-2 text-primary"></i> Lorem ipsum
                    dolor sit amet
                  </li>
                  <li className="mb-3">
                    <i className="mr-2 text-primary"></i> Sed ut
                    perspiciatis
                  </li>
                  <li className="mb-3">
                    <i className="mr-2 text-primary"></i> At vero eos et
                    accusamus
                  </li>
                  <li className="mb-3 text-muted">
                    <i className="fa fa-times mr-2"></i>
                    <del>Nam libero tempore</del>
                  </li>
                  <li className="mb-3 text-muted">
                    <i className="fa fa-times mr-2"></i>
                    <del>Sed ut perspiciatis</del>
                  </li>
                  <li className="mb-3 text-muted">
                    <i className="fa fa-times mr-2"></i>
                    <del>Sed ut perspiciatis</del>
                  </li>
                </ul>
                <a
                  href="#"
                  className="btn btn-primary btn-block p-2 shadow rounded-pill"
                >
                  Subscribe
                </a>
              </div>
            </div>

            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="bg-white p-5 rounded-lg shadow">
                <h1 className="h6 text-uppercase font-weight-bold mb-4">Pro</h1>
                <h2 className="h1 font-weight-bold">
                  $19
                  <span className="text-small font-weight-normal ml-2">/ month</span>
                </h2>

                <div className="custom-separator my-4 mx-auto bg-primary"></div>

                <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                  <li className="mb-3">
                    <i className="mr-2 text-primary"></i> Lorem ipsum
                    dolor sit amet
                  </li>
                  <li className="mb-3">
                    <i className="mr-2 text-primary"></i> Sed ut
                    perspiciatis
                  </li>
                  <li className="mb-3">
                    <i className="mr-2 text-primary"></i> At vero eos et
                    accusamus
                  </li>
                  <li className="mb-3">
                    <i className="mr-2 text-primary"></i> Nam libero
                    tempore
                  </li>
                  <li className="mb-3">
                    <i className="mr-2 text-primary"></i> Sed ut
                    perspiciatis
                  </li>
                  <li className="mb-3 text-muted">
                    <i className="fa fa-times mr-2"></i>
                    <del>Sed ut perspiciatis</del>
                  </li>
                </ul>
                <a
                  href="#"
                  className="btn btn-primary btn-block p-2 shadow rounded-pill"
                >
                  Subscribe
                </a>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="bg-white p-5 rounded-lg shadow">
                <h1 className="h6 text-uppercase font-weight-bold mb-4">
                  Enterprise
                </h1>
                <h2 className="h1 font-weight-bold">
                  $39
                  <span className="text-small font-weight-normal ml-2">/ month</span>
                </h2>

                <div className="custom-separator my-4 mx-auto bg-primary"></div>

                <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                  <li className="mb-3">
                    <i className="mr-2 text-primary"></i> Lorem ipsum
                    dolor sit amet
                  </li>
                  <li className="mb-3">
                    <i className="mr-2 text-primary"></i> Sed ut
                    perspiciatis
                  </li>
                  <li className="mb-3">
                    <i className="mr-2 text-primary"></i> At vero eos et
                    accusamus
                  </li>
                  <li className="mb-3">
                    <i className="mr-2 text-primary"></i> Nam libero
                    tempore
                  </li>
                  <li className="mb-3">
                    <i className="mr-2 text-primary"></i> Sed ut
                    perspiciatis
                  </li>
                  <li className="mb-3">
                    <i className="mr-2 text-primary"></i> Sed ut
                    perspiciatis
                  </li>
                </ul>
                <a
                  href="#"
                  className="btn btn-primary btn-block p-2 shadow rounded-pill"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Prices;

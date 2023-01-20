import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Link from "next/link";
import { useUser } from "../hooks/useUser";

const Header = () => {
  const { user } = useUser();
  return (
    <>
      <div style={{ background: "black" }}>
        <Container className="d-flex justify-content-end">
          {!user && (
            <Nav.Link as="span">
              <Link href="/login" >
                <span style={{ color: "gray", cursor: "pointer"}}>Login</span>
              </Link>
            </Nav.Link>
          )}
          {user && (
            <Nav.Link as="span">
              <Link href="/profile" >
                <span style={{ color: "gray", cursor: "pointer"}}>Profile</span>
              </Link>
            </Nav.Link>
          )}
          {user && (
            <Nav.Link as="span">
              <Link href="/logout" >
                <span style={{ color: "gray", cursor: "pointer"}}>Logout ({user?.email || user?.phoneNumber})</span>
              </Link>
            </Nav.Link>
          )}
        </Container>
      </div>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ms-2" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container className="d-flex">
            <Nav className="mr-auto ms-2">
              <Nav.Link as="span">
                <Link href="/" >
                  <span style={{ color: "gray", cursor: "pointer"}}>Home</span>
                </Link>
              </Nav.Link>
              <Nav.Link as="span">
                <Link href="/prices" >
                  <span style={{ color: "gray", cursor: "pointer"}}>Price</span>
                </Link>
              </Nav.Link>
              {user && (
              <Nav.Link as="span">
                <Link href="/albums" >
                  <span style={{ color: "gray", cursor: "pointer"}}>Albums</span>
                </Link>
              </Nav.Link>
              )}
              {user && (
              <Nav.Link as="span">
                <Link href="/uploadAlbum" >
                  <span style={{ color: "gray", cursor: "pointer"}}>Create Album</span>
                </Link>
              </Nav.Link>
              )}
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;

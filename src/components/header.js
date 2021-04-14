import React from "react";
import { Image, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Container>
        <Navbar expand="lg" className="justify-content-center">
          <Navbar.Brand href="#">
            <Image src="../Viaduct_logo.svg" width={90} />
          </Navbar.Brand>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;

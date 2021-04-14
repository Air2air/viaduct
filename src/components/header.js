import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image, Navbar, Container, Button } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 2,
              duration: 2,
            },
          },
        }}
      >
        <Container>
          <Navbar
            className="justify-content-between"
            style={{ height: "100px" }}
          >
            <Navbar.Brand href="#">
              <Image src="../Viaduct_logo.svg" width={90} />
            </Navbar.Brand>

            <Navbar.Text className="justify-content-end">
            <Button variant="light">
              <FontAwesomeIcon icon={["fas", "user"]} size="2x" color="gray" />
              <a href="#login">Mark Otto</a>
              </Button>
            </Navbar.Text>
          </Navbar>
        </Container>
      </motion.div>
      <br />
    </>
  );
};

export default Header;

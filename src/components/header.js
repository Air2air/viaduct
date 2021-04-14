import React from "react";
import { motion } from "framer-motion";
import { Image, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <>

<motion.div initial="hidden" animate="visible" variants={{
  hidden: {
    scale: .8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 2,
      duration:2
    }
  }, 
}}>
      <Container>
        <Navbar className="justify-content-center">
          <Navbar.Brand href="#">
            <Image src="../Viaduct_logo.svg" width={90} />
          </Navbar.Brand>
        </Navbar>
      </Container>
      </motion.div>
      <br />
    </>
  );
};

export default Header;

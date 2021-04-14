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
              <motion.div
                whileHover={{
                  scale: 1.04,
                }}
              >
                <Button variant="dark" size="md">
                  <FontAwesomeIcon
                    icon={["fas", "user"]}
                    size="1.5x"
                    color="gray"
                    className="mr-3"
                  />
                  Todd Dunning
                </Button>
              </motion.div>
            </Navbar.Text>
          </Navbar>
        </Container>
      </motion.div>
      <br />
    </>
  );
};

export default Header;

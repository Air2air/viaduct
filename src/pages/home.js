import React from "react";
import { motion } from "framer-motion";

import Notifications from "../components/cards/cardParent";

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.2,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const pageStyle = {
  position: "absolute",
};

function Home() {
  return (
      <motion.div
        style={pageStyle}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Notifications />
        <h1>Home new </h1>
        <p>
          Let's animate transitions between React Router routes with Framer
          Motion
        </p>
      </motion.div>
  );
}

export default Home;

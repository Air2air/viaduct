import React from "react";
import { motion } from "framer-motion";

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
  paddingBottom:"90px"
};

function About() {
  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="text-white"
    >
      <h1>My process</h1>
      <p>I make an initial shot at sketching the app just for discussion. </p>
      <p>
        I find skipping over the UI sketching tools and just building on a branch is the fastest
        way to iterate for the team.
      </p>
      <p>
        I either create requirements or ask for them, then iterate prototypes
        ASAP for my manager.
      </p>

      <br />
      <hr />
      <br />

      <h4>Overall rules </h4>
      <p>User confusion kills the company</p>
      <p>The journey is paramount and very fragile</p>
      <p>Initial adoption rates absolutely crucial</p>

      <br />
      <hr />
      <br />

      <h4>Strategy high level</h4>
      <p>Goals definition and scope... is it a feature or a new journey?</p>
      <p>If a feature where does it fit in the journey</p>
      <p>What does it solve and what user input is required</p>
      <p>Negative impact on the user, and time consumption</p>

      <br />
      <hr />
      <br />

      <h4>Design Blowup view</h4>
      <p>Total fields required</p>
      <p>What needs to be added to the API</p>
      <p>What can be compressed in the reduction phase</p>

      <br />
      <hr />
      <br />

      <h4>Reduction phase</h4>
      <p>'One button' perfect world version</p>
      <p>How small can the feature be physically</p>
      <p>How much of the feature can be preprocessed in the back end</p>
      <p>How to reduce decision making by the user</p>
      <p>Precalculation - How much can be done in the framework</p>

      <br />
      <hr />
      <br />

      <h4>Journey integration with the App flow</h4>
      <p>How to fit the feature smoothly into the journey</p>
      <p>Reduce sidebar items</p>

      <br />
      <hr />
      <br />

      <h4>Journey integration with the App flow</h4>
      <p>How to fit the feature smoothly into the journey</p>
      <p>Reduce sidebar items</p>

      <br />
      <hr />
      <br />

      <h4>Use case testing</h4>
      <p>Notifications and thresholds</p>
      <p>Engagement tracking (Mixpanel, session timing)</p>
    </motion.div>
  );
}

export default About;

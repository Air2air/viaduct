import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.2
    }
  };
  
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };
  
  const pageStyle = {
    position: "absolute"
  };
  
  

function Settings() {
    return (
      <motion.div
        style={pageStyle}
        className="row text-white"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className="col-md-8">
          <h1>Settings</h1>
          <form>
            <fieldset>
              <legend>Details</legend>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" className="form-control" />
                </div>
              </div>
            </fieldset>
  
            <fieldset>
              <legend>Preferences</legend>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  id="large-labels"
                  className="custom-control-input"
                />
                <label htmlFor="large-labels" className="custom-control-label">
                  Use Larger Labels
                </label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  id="email-opt-in"
                  className="custom-control-input"
                />
                <label htmlFor="email-opt-in" className="custom-control-label">
                  Receive Notifications by Email
                </label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  id="hide-profile-pic"
                  className="custom-control-input"
                />
                <label
                  htmlFor="hide-profile-pic"
                  className="custom-control-label"
                >
                  Show Profile Image
                </label>
              </div>
            </fieldset>
          </form>
        </div>
      </motion.div>
    );
  }

  export default Settings
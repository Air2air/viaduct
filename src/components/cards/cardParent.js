import React from "react";
import { motion } from "framer-motion";

function Notifications() {
  const elements = ["one", "two", "three"];
  return (
    <ul>
      {elements.map((value, index) => {
        return <li key={index}>{value}</li>;
      })}
    </ul>
  );
}

export default Notifications;

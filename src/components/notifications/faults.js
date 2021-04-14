import React from "react";
import { CardDeck, Card, Badge, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
//import { motion } from "framer-motion";

function Faults() {
  const faults = [
    {
      category: "CAN bus",
      count: 7,
      info: "Auxiliary Emissions Controls",
      code: "RB67",
      condition: "danger",
      color: "light",
    },
    {
      category: "ISO-TP",
      count: 3,
      info: "Ignition System or Misfire",
      code: "CB732",
      condition: "danger",
      color: "light",
    },
    {
      category: "ISO-TP",
      count: 1,
      info: "Fuel and Air Metering",
      code: "P0667",
      condition: "warning",
      color: "dark",
    },
    {
      category: "ISO-TP",
      count: 1,
      info: "Fuel and Air Metering",
      code: "P0669",
      condition: "warning",
      color: "dark",
    },
  ];
  const faultsList = faults.map(
    ({ category, count, info, code, condition, color }) => (
      <Card key={code} bg={condition} text={color}>
        <Accordion>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            {category}
          </Accordion.Toggle>
          <Card.Body>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
            <Card.Text>{info}</Card.Text>
          </Card.Body>
          <Card.Footer>{code}</Card.Footer>
        </Accordion>
      </Card>
    )
  );

  return (
    <>
      <h2 className="pb-2" style={{ color: "gray" }}>
        Faults
        <Badge
          variant="secondary"
          style={{ backgroundColor: "gray" }}
          className="ml-3"
        >
          4
        </Badge>
      </h2>
      <CardDeck>{faultsList}</CardDeck>
    </>
  );
}

export default Faults;

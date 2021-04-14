import React from "react";
import { CardDeck, Card, Badge } from "react-bootstrap";
import { motion } from "framer-motion";

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
      code: "P0667",
      condition: "warning",
      color: "dark",
    },
  ];
  const faultsList = faults.map(
    ({ category, count, info, code, condition, color }) => (
      <>
        <Card key={code} bg={condition} text={color}>
          <Card.Header>{category}</Card.Header>
          <Card.Body>
            <Card.Text>{info}</Card.Text>
          </Card.Body>
          <Card.Footer>{code}</Card.Footer>
        </Card>
      </>
    )
  );

  return (
    <>
      <h2 className="pb-2" style={{ color: "gray" }}>
        Faults
        <Badge variant="secondary" style={{ backgroundColor: "gray" }} className="ml-3">
          4
        </Badge>
      </h2>
      <CardDeck >{faultsList}</CardDeck>
    </>
  );
}

export default Faults;


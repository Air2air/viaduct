import React from "react";
import { CardDeck, Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <Accordion key={code}>
        <Card bg={condition} text={color}>
          <Accordion.Toggle
            as={Card.Header}
            eventKey={code}
            style={{ cursor: "pointer" }}
          >
            <b>{category}</b>
            <FontAwesomeIcon
              icon={["fas", "chevron-down"]}
              style={{ float: "right" }}
            />
          </Accordion.Toggle>
          <Card.Body>
            <Accordion.Collapse eventKey={code}>
              <Card.Body>Drilldown info</Card.Body>
            </Accordion.Collapse>
            <Card.Text>{info}</Card.Text>
          </Card.Body>
          <Card.Footer>{code}</Card.Footer>
        </Card>
      </Accordion>
    )
  );

  return (
    <>
      <h2 className="pb-3" style={{ color: "gray" }}>
        Faults
        {/* <Button variant="info">
          <Badge
            variant="danger"
            className="ml-3"
          >
            4
          </Badge>
          Fix Faults
        </Button> */}
        <div style={{ width: "80px", float: "right" }}>
          <Sparklines data={[5, 1, 4, 3, 0, 2, 0]} width={80} height={14}>
            <SparklinesLine
              color="#999"
              style={{ fill: "none", strokeWidth: 3 }}
            />
          </Sparklines>
        </div>
      </h2>
      <CardDeck>{faultsList}</CardDeck>
    </>
  );
}

export default Faults;

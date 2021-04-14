import React from "react";
import { CardDeck, Card, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Sparklines, SparklinesSpots, SparklinesLine } from "react-sparklines";

function Reporting() {
  const reporting = [
    {
      category: "CAN bus",
      count: 7,
      info: "Auxiliary Emissions Controls",
      code: "RB67",
      condition: "primary",
      color: "light",
      data: [4, 1, 1, 1, 4, 3, 0, 0, 2, 0, 5, 2, 8],
    },
    {
      category: "ISO-TP",
      count: 3,
      info: "Ignition System or Misfire",
      code: "CB732",
      condition: "success",
      color: "light",
      data: [0, 2, 0, 5, 2, 0, 4, 1, 1, 1, 4, 3, 0],
    },
    {
      category: "ISO-TP",
      count: 1,
      info: "Fuel and Air Metering",
      code: "P0667",
      condition: "success",
      color: "light",
      data: [0, 2, 0, 5, 1, 4, 3, 0, 2, 0, 4, 1, 1],
    },
  ];
  const reportingList = reporting.map(
    ({ category, count, info, code, condition, color, data }) => (
      <Card key={code} bg={condition} text={color}>
        <Card.Header>
          <b>{category}</b>
          <Badge
            pill
            style={{ float: "right" }}
            variant={condition}
            className="ml-3"
          >
            {count} nodes
          </Badge>
        </Card.Header>
        <Card.Body className="p-2">
          <div style={{ width: "100%", opacity: 0.5 }}>
            <Sparklines data={data} width={100} height={20}>
              <SparklinesLine color="#fff" style={{ fill: "none" }} />
              <SparklinesSpots />
            </Sparklines>
          </div>
        </Card.Body>
        <Card.Footer>
          {code}
          <FontAwesomeIcon
            icon={["fas", "chevron-right"]}
            style={{ float: "right" }}
          />
        </Card.Footer>
      </Card>
    )
  );

  return (
    <>
      <h2 className="pb-2" style={{ color: "gray" }}>
        Network
        <Badge
          variant="secondary"
          style={{ backgroundColor: "gray" }}
          className="ml-3"
        >
          3
        </Badge>
        <div style={{ width: "80px", float: "right" }}>
          <Sparklines data={[0, 2, 0, 5, 1, 4, 3]} width={80} height={14}>
            <SparklinesLine
              color="#999"
              style={{ fill: "none", strokeWidth: 3 }}
            />
          </Sparklines>
        </div>
      </h2>
      <CardDeck>{reportingList}</CardDeck>
    </>
  );
}

export default Reporting;

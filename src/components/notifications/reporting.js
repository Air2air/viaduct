import React from "react";
import { CardDeck, Card, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
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
      data: [4, 1, 1, 1, 4, 3, 0, 0, 2, 0, 5, 2, 0],
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
      <>
        <Card key={code} bg={condition} text={color}>
          <Card.Header>{category}
          <Badge
          variant={condition}
          style={{ backgroundColor: "gray" }}
          className="ml-3"
        >
          5
        </Badge>
          
          </Card.Header>
          <Card.Body className="p-2">
            <div style={{ width: "100%" }}>
              <Sparklines data={data} width={100} height={20}>
                <SparklinesLine color="#fff" style={{ fill: "none" }} />
                <SparklinesSpots />
              </Sparklines>
            </div>
          </Card.Body>
          <Card.Footer>{code}</Card.Footer>
        </Card>
      </>
    )
  );

  return (
    <>
      <h2 className="pb-2" style={{ color: "gray" }}>
        Network{" "}
        <Badge
          variant="secondary"
          style={{ backgroundColor: "gray" }}
          className="ml-3"
        >
          5
        </Badge>
      </h2>
      <CardDeck>{reportingList}</CardDeck>
    </>
  );
}

export default Reporting;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardLink,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import { museums } from "../data/_data";
import Jumbotron from "./Jumbotron";

export default function LandingPage() {
  const [museumLocations, setMuseumLocations] = useState(museums);

  return (
    <div className="landing-page">
      <Jumbotron></Jumbotron>
      <section className="content-wrapper">
        <Container>
          <Row>
            {museumLocations.map((location, key) => (
              <Col md="4" key={key}>
                <Card>
                  <CardBody>
                    <CardText>{location.city}</CardText>
                    <Link to={`/museums/${location.locationId}`}>See</Link>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

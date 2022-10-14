import React, { useState, useEffect } from "react";
import { Col, Container, Navbar, Nav, NavItem, Row } from "reactstrap";
import { museums } from "../data/_data";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import { Link, useParams } from "react-router-dom";

export default function Museums() {
  const { id } = useParams();
  const locId = id - 1;
  const [museum, setMuseum] = useState(museums[locId].datas);
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <Container>
      <Navbar className="bg-light">
        <Nav>
          <NavItem>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link active">{museums[locId].city}</Link>
          </NavItem>
        </Nav>
      </Navbar>
      <Row className="mt-5">
        <Col md={{ size: 6, offset: 3 }}>
          {museum.map((data, key) => (
            <div key={key} className="museums-wrapper">
              <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                  <AccordionHeader targetId={data.id}>
                    {data.name}
                  </AccordionHeader>
                  <AccordionBody accordionId={data.id}>
                    {data.photoUrl !== "" && (
                      <div className="image">
                        <img src={data.photoUrl} alt={data.name} />
                      </div>
                    )}
                    <div className="context">
                      <p className="text-info">
                        <strong>Address:</strong> {data.address}
                      </p>
                      <p>{data.info}</p>
                    </div>
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

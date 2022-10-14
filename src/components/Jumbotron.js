import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function Jumbotron() {
  return (
    <section className="jumbotron bg-light">
      <Container>
        <Row>
          <Col md="8">
            <h1>İstanbul Müzeleri</h1>
            <h6>
              İstanbul’un müzeleri, gezginlere farklı dünyaların kapılarını
              açarken ailece eşsiz deneyimler yaşamanızın da anahtarını sunuyor.
            </h6>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

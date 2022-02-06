import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import FilterSection from "../FilterSection/FilterSection";
import "./Home.css";
import burger from "../../img/burger.jpg";
const Home = () => {
  return (
    <Container fluid>
      <Col className="header p-3 rounded">
        <h2>Shop Now</h2>
      </Col>
      <Row>
        <Col md={3} className="filterSection ms-3 mt-2 p-2 rounded">
          <FilterSection></FilterSection>
        </Col>
        <Col md={8} className="mt-2">
          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card>
                <Card.Img variant="top" src={burger} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  <Col>
                    <Button variant="primary">Buy Now</Button>
                    <Button variant="warning" className="ms-2">
                      Add to cart
                    </Button>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={burger} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  <Col>
                    <Button variant="primary">Buy Now</Button>
                    <Button variant="warning" className="ms-2">
                      Add to cart
                    </Button>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={burger} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  <Col>
                    <Button variant="primary">Buy Now</Button>
                    <Button variant="warning" className="ms-2">
                      Add to cart
                    </Button>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

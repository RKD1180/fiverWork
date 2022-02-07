import { Button, Col, Form, FormControl, ListGroup } from "react-bootstrap";


const FilterSection = () => {
  return (
    <div>
      <Col className="mb-4">
        <h3 className="mb-2">Filter Section</h3>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button type="submit" variant="outline-success">Search</Button>
        </Form>
      </Col>

      <ListGroup>
        <ListGroup.Item action>
          <Form.Check type={"checkbox"} id={"2"} label={"Cras justo odio"} />
        </ListGroup.Item>
        <ListGroup.Item action>
          <Form.Check
            type={"checkbox"}
            id={"3"}
            label={"Dapibus ac facilisis ino"}
          />
        </ListGroup.Item>
        <ListGroup.Item action>
          <Form.Check type={"checkbox"} id={"4"} label={"Morbi leo risus"} />
        </ListGroup.Item>
        <ListGroup.Item action>
          <Form.Check
            type={"checkbox"}
            id={"5"}
            label={"Porta ac consectetur ac"}
          />
        </ListGroup.Item>
        <ListGroup.Item action>
          <Form.Check type={"checkbox"} id={"6"} label={"Vestibulum at eros"} />
        </ListGroup.Item>
      </ListGroup>

      <Col className="mt-2">
        <Form className="d-flex">
          <Form.Group
            className="mb-3 w-25"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Min</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group
            className="mb-3 w-25"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Max</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Button
            type="submit"
            className="w-25 ms-2"
            variant="dark"
            style={{ height: 35, width: 10, marginTop: 35 }}
          >
            Go
          </Button>
        </Form>
      </Col>
      <Col>
        <h3>Customer Review</h3>
        <Button variant="warning" className="ms-2">
          4 & Up
        </Button>
        <Button variant="warning" className="ms-2">
          3 & Up
        </Button>
        <Button variant="warning" className="ms-2">
          2 & Up
        </Button>
        <Button variant="warning" className="ms-2 mt-2">
          1 & Up
        </Button>
      </Col>
    </div>
  );
};

export default FilterSection;

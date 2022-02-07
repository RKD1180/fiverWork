import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, FormControl, ListGroup, Row, Spinner } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import "./Home.css";
const Home = () => {
  const { register, handleSubmit, reset } = useForm();
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState();
  const [products, setProducts] = useState([]);
  const [serachData, setSerachData] = useState(null);
  const [categoryData, setCategoryData] = useState(null);
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);
  const [error, setError] = useState('');
  // console.log(serachData, page)
  let limit = 12;
  const onSubmit = data => {
    setSerachData(data)
  }

  const handleMinToMaxRange = () => {
    let searchValid = serachData?.search || '';
    if (min && max) {
      fetch(`https://filterdb.herokuapp.com/products/minmumToMaxPrice?search=${searchValid}&&min=${min}&&max=${max}&&page=${page}&&limit=${limit}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(response => response.json())
        .then(data => {
          //  console.log(data)
          if (data?.error?.badRequest) {
            setError(data.error.badRequest);
            setProducts([])
          }
          if (data?.total) {
            setError('');
            setPageCount(Math.ceil(data.total / limit))
          } if (data?.products) {
            reset()
            setProducts(data.products)
          }
        })
    }
  }

  const handleStarSearch = (e) => {
   const searchValid = serachData?.search || '';
    fetch(`https://filterdb.herokuapp.com/products/starSearch?search=${searchValid}&&star=${e.target.value}&&page=${page}&&limit=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data?.error?.badRequest) {
          setError(data.error.badRequest);
          setProducts([])
        }
        if (data?.total) {
          setError('');
          setPageCount(Math.ceil(data.total / limit))
        } if (data?.products) {
          reset()
          setProducts(data.products)
        }
      })
  }
  useEffect(() => {
    if (!serachData) {
      fetch(`https://filterdb.herokuapp.com/products?&&page=${page}&&limit=${limit}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data?.error?.badRequest) {
            setError(data.error.badRequest);
            setProducts([])
          }
          if (data?.total) {
            setError('');
            setPageCount(Math.ceil(data.total / limit))
          } if (data?.products) {
            reset()
            setProducts(data.products)
          }
        })
    }

    if (categoryData) {
      let searchValid = serachData?.search || '';
      fetch(`https://filterdb.herokuapp.com/products/categories?search=${searchValid}&&category=${categoryData}&&page=${page}&&limit=${limit}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data?.error?.badRequest) {
            setError(data.error.badRequest);
            setProducts([])
          }
          if (data?.total) {
            setError('');
            setPageCount(Math.ceil(data.total / limit))
          } if (data?.products) {
            // console.log(data.products)
            reset()
            setProducts(data.products)
          }
        })
    }
    if (serachData?.search) {
      const searchValid = serachData?.search || ''
      fetch(`https://filterdb.herokuapp.com/products?search=${searchValid}&&page=${page}&&limit=${limit}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data?.error?.badRequest) {
            setError(data.error.badRequest);
            setProducts([])
          }
          if (data?.total) {
            setError('');
            setPageCount(Math.ceil(data.total / limit))
          } if (data?.products) {
            reset()
            setProducts(data.products)
          }
        })
    }
  }, [page, serachData, limit, categoryData, reset])
  return (
    <Container fluid>
      <Col className="header p-3 rounded">
        <h2>Shop Now</h2>
      </Col>
      <Row>
        <Col md={3} className="filterSection ms-3 mt-2 p-2 rounded">
          <div>
            <Col className="mb-4">
              <h3 className="mb-2">Filter Section</h3>
              <Form className="d-flex" onSubmit={handleSubmit(onSubmit)}>
                <FormControl
                  type="search"
                  {...register("search", { required: true, min: 0 })}
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button type="submit" variant="outline-success">Search</Button>
              </Form>
            </Col>
            <ListGroup>
              <ListGroup.Item action>
                <Form.Check onClick={(e) => {
                  if (e.target.checked) {
                    setCategoryData(e.target.value)
                  } else {
                    setCategoryData("")
                  }
                }} label={"Laptop"} value={"Laptop"} />
              </ListGroup.Item>
              <ListGroup.Item action>
                <Form.Check onClick={(e) => {
                  if (e.target.checked) {
                    setCategoryData(e.target.value)
                  } else {
                    setCategoryData("")
                  }
                }} label={"android"} value={"android"} />
              </ListGroup.Item>

              <ListGroup.Item action>
                <Form.Check type={"checkbox"} onClick={(e) => {
                  if (e.target.checked) {
                    setCategoryData(e.target.value)
                  } else {
                    setCategoryData("")
                  }
                }} label={"Camera"} value={"camera"} />
              </ListGroup.Item>
            </ListGroup>
            <Col className="mt-2">
              <Form className="d-flex">
                <Form.Group
                  className="mb-3 w-25"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Min</Form.Label>
                  <Form.Control type="number" min="0" onChange={(e) => setMin(e.target.value)} />
                </Form.Group>
                <Form.Group
                  className="mb-3 w-25"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Max</Form.Label>
                  <Form.Control type="number" min="0" onChange={(e) => setMax(e.target.value)} />
                </Form.Group>
                <Button
                  onClick={handleMinToMaxRange}
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
              <Button onClick={handleStarSearch} value="5" variant="warning" className="ms-2">
                5 & Up
              </Button>
              <Button onClick={handleStarSearch} value="4" variant="warning" className="ms-2">
                4 & Up
              </Button>
              <Button onClick={handleStarSearch} value="3" variant="warning" className="ms-2">
                3 & Up
              </Button>
              <Button onClick={handleStarSearch} value="2" variant="warning" className="ms-2">
                2 & Up
              </Button>
              <Button onClick={handleStarSearch} value="1" variant="warning" className="ms-2 mt-2">
                1 & Up
              </Button>
            </Col>
          </div>
        </Col>
        <Col md={8} className="mt-2">
          <Row xs={1} md={3} className="g-4">
          
            { !products?<Container style={{display:'flex',justifyContent: 'center',marginTop: '40px'}}><Spinner animation="border" /></Container> : products?.map(pd => <Col key={pd._id}>
                <Card>
                  <Card.Img variant="top" src={pd.img} />
                  <Card.Body>
                    <Card.Title>{pd.name?.slice(0, 15)}</Card.Title>
                    <Card.Text>
                      {pd?.name?.slice(0, 50)}
                    </Card.Text>
                    <Col>
                      <h5>Price:{pd.price}</h5>
                    </Col>
                    <Col>
                      <h6>Star:{pd.star}</h6>
                    </Col>
                    <Col>
                      <Button variant="primary">Buy Now</Button>
                      <Button variant="warning" className="ms-2">
                        Add to cart
                      </Button>
                    </Col>
                  </Card.Body>
                </Card>
              </Col>
              )
            }
          </Row>{error ? <h3 style={{ marginTop: "70px", textAlign: "center" }}>{error}</h3> :
            <div className="Row" style={{ justifyContent: 'center' }}>
              <div className="pagination">
                {
                  [...Array(pageCount).keys()].map((number => <button key={number} className={number + 1 === page ? 'btn btn-primary' : 'btn btn-light'} style={{ marginRight: '5px' }}
                    onClick={() => setPage(number + 1)}
                  >{number + 1}
                  </button>))
                }
              </div>
            </div>
          }

        </Col>

      </Row>

    </Container>
  );
};

export default Home;

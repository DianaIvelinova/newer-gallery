import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import PrivateRoute from "../../components/PrivateRoute";
import Link from "next/link";


const Albums = () => {
  const [viewClass, setViewClass] = useState("list-view");
  const [rowMd, setRowMd] = useState(1);
  const [rowXs, setRowXs] = useState(1);
  const [flexBlock, setFlexBlock] = useState("d-sm-flex");
  const [width, setWidth] = useState("w-25");
  const [height, setHeight] = useState();

  function showGrid() {
    setViewClass("grid-view");
    setRowMd(3);
    setRowXs(2);
    setFlexBlock("d-block");
    setWidth("w-100")
    console.log(333);
  }

  function showList() {
    setViewClass("list-view");
    setRowMd(1);
    setRowXs(1);
    setFlexBlock("d-sm-flex");
    setWidth("w-25")
    setHeight("h-auto mh-100")
    console.log(777);
  }

  return (
    <>
      <Container className="mt-2">
        <h1 className="mt-5 mb-3 border-2 border-bottom border-secondary d-flex justify-content-between">
        <p>Gallery</p>
        <Link href="/uploadPhoto"><span  className="h6 pt-4" style={{cursor: "pointer"}}>+ Add album</span></Link>
        </h1>

        <ButtonGroup aria-label="Basic example" className="mb-2 ">
          <Button variant="secondary" className="btn-list" onClick={showList}>
            <Image alt=""нпм src="/list.svg" width={25} height={25} />
          </Button>
          <Button variant="secondary" className="btn-grid" onClick={showGrid}>
            <Image alt=""нпм src="/grid.svg" width={20} height={20} />
          </Button>
          <Button variant="secondary" className="btn-masonry">
            <Image alt=""нпм src="/columns.svg" width={20} height={20} />
          </Button>
        </ButtonGroup>

        <Row xs={rowXs} md={rowMd} className="grid-view">
          <Col>
            <Card className="mb-2">
              <Card.Link href="galleryPage" className="link-dark text-decoration-none">
                <Row className={flexBlock}>
                  <Col xs md="4" className={width} >
                    <Card.Img
                      src="/gull.jpg"
                      className="w-100 h-100"
                      style={{ objectFit: "cover"}}
                    />
                  </Col>
                  <Col className="ps-4">
                    <Card.Body
                      className="pb-sm-2 pt-2 pb-3 ps-0 pe-2 h-100 d-grid"
                      style={{ gridTemplateRows: "auto 30px" }}
                    >
                      <Row className="d-block mb-3">
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the cards content.
                        </Card.Text>
                      </Row>
                      <Row>
                        <small className="col">
                          <Image alt=""нпм
                            src="/images.svg"
                            width={20}
                            height={20}
                            className="me-2"
                          />
                          3333
                        </small>
                        <small className="col"> 17.11.2013</small>
                      </Row>
                    </Card.Body>
                  </Col>
                </Row>
              </Card.Link>
            </Card>
          </Col>
          <Col>
            <Card className="mb-2">
              <Card.Link href="galleryPage" className="link-dark text-decoration-none">
                <Row className={flexBlock}>
                  <Col xs md="4" className={width} >
                    <Card.Img
                      src="/book.jpg"
                      className="w-100 h-100"
                      style={{ objectFit: "cover"}}
                    />
                  </Col>
                  <Col className="ps-4">
                    <Card.Body
                      className="pb-sm-2 pt-2 pb-3 ps-0 pe-2 h-100 d-grid"
                      style={{ gridTemplateRows: "auto 30px" }}
                    >
                      <Row className="d-block mb-3">
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the cards content.
                        </Card.Text>
                      </Row>
                      <Row>
                        <small className="col">
                          <Image alt=""нпм
                            src="/images.svg"
                            width={20}
                            height={20}
                            className="me-2"
                          />
                          3333
                        </small>
                        <small className="col"> 17.11.2013</small>
                      </Row>
                    </Card.Body>
                  </Col>
                </Row>
              </Card.Link>
            </Card>
          </Col>
          <Col>
            <Card className="mb-2">
              <Card.Link href="galleryPage" className="link-dark text-decoration-none">
                <Row className={flexBlock}>
                  <Col xs md="4" className={width} >
                    <Card.Img
                      src="/leaf.jpg"
                      className="w-100 h-100"
                      style={{ objectFit: "cover"}}
                    />
                  </Col>
                  <Col className="ps-4">
                    <Card.Body
                      className="pb-sm-2 pt-2 pb-3 ps-0 pe-4 h-100 d-grid"
                      style={{ gridTemplateRows: "auto 30px" }}
                    >
                      <Row className="d-block mb-3">
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the cards content.
                        </Card.Text>
                      </Row>
                      <Row>
                        <small className="col">
                          <Image alt=""нпм
                            src="/images.svg"
                            width={20}
                            height={20}
                            className="me-2"
                          />
                          3333
                        </small>
                        <small className="col"> 17.11.2013</small>
                      </Row>
                    </Card.Body>
                  </Col>
                </Row>
              </Card.Link>
            </Card>
          </Col>
          <Col>
            <Card className="mb-2">
              <Card.Link href="galleryPage" className="link-dark text-decoration-none">
                <Row className={flexBlock}>
                  <Col xs md="4" className={width} >
                    <Card.Img
                      src="/yoda.jpeg"
                      className="w-100 h-100"
                      style={{ objectFit: "cover"}}
                    />
                  </Col>
                  <Col className="ps-4">
                    <Card.Body
                      className="pb-sm-2 pt-2 pb-3 ps-0 pe-2 h-100 d-grid"
                      style={{ gridTemplateRows: "auto 30px" }}
                    >
                      <Row className="d-block mb-3">
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the cards content.
                        </Card.Text>
                      </Row>
                      <Row>
                        <small className="col">
                          <Image alt=""
                            src="/images.svg"
                            width={20}
                            height={20}
                            className="me-2"
                          />
                          3333
                        </small>
                        <small className="col"> 17.11.2013</small>
                      </Row>
                    </Card.Body>
                  </Col>
                </Row>
              </Card.Link>
            </Card>
          </Col>
          <Col>
            <Card className="mb-2">
              <Card.Link href="galleryPage" className="link-dark text-decoration-none">
                <Row className={flexBlock}>
                  <Col xs md="4" className={width} >
                    <Card.Img
                      src="/shu.jpg"
                      className="w-100 h-100"
                      style={{ objectFit: "cover"}}
                    />
                  </Col>
                  <Col className="ps-4">
                    <Card.Body
                      className="pb-sm-2 pt-2 pb-3 ps-0 pe-2 h-100 d-grid"
                      style={{ gridTemplateRows: "auto 30px" }}
                    >
                      <Row className="d-block mb-3">
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the cards content.
                        </Card.Text>
                      </Row>
                      <Row>
                        <small className="col">
                          <Image alt=""нпм
                            src="/images.svg"
                            width={20}
                            height={20}
                            className="me-2"
                          />
                          3333
                        </small>
                        <small className="col"> 17.11.2013</small>
                      </Row>
                    </Card.Body>
                  </Col>
                </Row>
              </Card.Link>
            </Card>
          </Col>
          <Col>
            <Card className="mb-2">
              <Card.Link href="galleryPage" className="link-dark text-decoration-none">
                <Row className={flexBlock}>
                  <Col xs md="4" className={width} >
                    <Card.Img
                      src="/japan.jpg"
                      className="w-100 h-100"
                      style={{ objectFit: "cover"}}
                    />
                  </Col>
                  <Col className="ps-4">
                    <Card.Body
                      className="pb-sm-2 pt-2 pb-3 ps-0 pe-2 h-100 d-grid"
                      style={{ gridTemplateRows: "auto 30px" }}
                    >
                      <Row className="d-block mb-3">
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the cards content.
                        </Card.Text>
                      </Row>
                      <Row>
                        <small className="col">
                          <Image alt=""нпм
                            src="/images.svg"
                            width={20}
                            height={20}
                            className="me-2"
                          />
                          3333
                        </small>
                        <small className="col"> 17.11.2013</small>
                      </Row>
                    </Card.Body>
                  </Col>
                </Row>
              </Card.Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PrivateRoute(Albums);
//export default Albums;

import Container from "react-bootstrap/Container";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Image from "react-bootstrap/Image";
import PrivateRoute from "../components/PrivateRoute";
import Link from "next/link";

const GalleryPage = () => {
  const [viewClass, setViewClass] = useState("list-view");
  const [rowMd, setRowMd] = useState(1);
  const [rowXs, setRowXs] = useState(1);
  const [width, setWidth] = useState("w-25");
  const [height, setHeight] = useState();

  function showGrid() {
    setViewClass("grid-view");
    setRowMd(5);
    setRowXs(4);
    setWidth("w-25");
  }

  function showList() {
    setViewClass("list-view");
    setRowMd(1);
    setRowXs(1);
    setWidth("w-100");
    setHeight("h-auto mh-100");
  }
  return (
    <>
      <Container className="mt-2">
        <h1 className="mt-5 mb-3 border-2 border-bottom border-secondary d-flex justify-content-between">
          <p>Photos</p>
          <Link href="/uploadPhoto"><span  className="h6 pt-4" style={{cursor: "pointer"}}>+ Add photos</span></Link>
        </h1>

        <ButtonGroup aria-label="Basic example" className="mb-2 ">
          <Button variant="secondary" className="btn-list" onClick={showList}>
            <Image alt="" src="/list.svg" width={25} height={25} />
          </Button>
          <Button variant="secondary" className="btn-grid" onClick={showGrid}>
            <Image alt="" src="/grid.svg" width={20} height={20} />
          </Button>
        </ButtonGroup>

        <Row xs={rowXs} md={rowMd} className="grid-view">
          <Col xs md="4" className={`${width} mb-4`} >
            <Image alt=""
              src="/gull.jpg"
              className="w-100 h-100"
              style={{ objectFit: "contain" }}
            />
          </Col>

          <Col xs md="4" className={`${width} mb-4`} >
            <Image alt=""
              src="/japan.jpg"
              className="w-100 h-100"
              style={{ objectFit: "contain" }}
            />
          </Col>

          <Col xs md="4" className={`${width} mb-4`} >
            <Image alt=""
              src="/leaf.jpg"
              className="w-100 h-100"
              style={{ objectFit: "contain" }}
            />
          </Col>

          <Col xs md="4" className={`${width} mb-4`} >
            <Image alt=""
              src="/yoda.jpeg"
              className="w-100 h-100"
              style={{ objectFit: "contain" }}
            />
          </Col>

          <Col xs md="4" className={`${width} mb-4`} >
            <Image alt=""
              src="/shu.jpg"
              className="w-100 h-100"
              style={{ objectFit: "contain" }}
            />
          </Col>

          <Col xs md="4" className={`${width} mb-4`} >
            <Image alt=""
              src="/book.jpg"
              className="w-100 h-100"
              style={{ objectFit: "contain" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PrivateRoute(GalleryPage);

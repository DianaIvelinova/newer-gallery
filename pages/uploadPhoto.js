import React from "react";
import Container from "react-bootstrap/Container";
import Dropzone from "../components/Dropzone";
import Button from "react-bootstrap/Button";

const UploadPhoto = () => {
  return (
    <>
      <Container className="w-50 mt-5">
        <h1 className="text-center">Add new photos to the album</h1>
        <div className="drag">
          <Dropzone />
        </div>
        <Button variant="primary" type="submit" className="mt-2">
          Upload
        </Button>
      </Container>
    </>
  );
};

export default UploadPhoto;

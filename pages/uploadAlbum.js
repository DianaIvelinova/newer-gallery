import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { useRef, useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";
import Router from "next/router";
import useUploadedPhoto from "../hooks/useUploadedPhoto";

function UploadAlbum() {
  const name = useRef();
  const desc = useRef();
  const { token } = useUser();
  const action = "createAlbum";
  const uploadPhotoRef = useRef();
  const photosPreviewRef = useRef();
  const { photos, numActiveUploads } = useUploadedPhoto(uploadPhotoRef,photosPreviewRef);
  console.log(photos)

  async function saveAlbumToDB() {
    try {
      const response = await fetch("/api", {
        method: "POST",
        body: JSON.stringify({
          name: name.current.value,
          desc: desc.current.value,
          token: token,
          action: action,
          photos: photos,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      Router.push(`/albums/${data.key}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Container className="w-50 mt-5">
        <h1>Create new album</h1>
        <Form>
          <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
            <FormLabel>Name</FormLabel>
            <FormControl type="text" ref={name} required />
          </FormGroup>
          <FormGroup className="mb-3" controlId="exampleForm.ControlTextarea1">
            <FormLabel>Description</FormLabel>
            <FormControl as="textarea" ref={desc} rows={3} />
          </FormGroup>
          <Button variant="primary" type="button" disabled={numActiveUploads === 0 ? false : true} onClick={saveAlbumToDB}>
            Upload
          </Button>
          <input
            type="file"
            className="ms-3"
            accept="image/png, image/jpeg, image/jpg"
            multiple
            ref={uploadPhotoRef}
          />
          <div id="imagesPreview" ref={photosPreviewRef}>
            {" "}
          </div>
        </Form>
      </Container>
    </>
  );
}

export default UploadAlbum;

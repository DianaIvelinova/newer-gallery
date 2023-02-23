import { useRouter } from "next/router";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Image from "../../components/Image";
import Lightbox from "../../components/Lightbox";

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/albums");
  const albums = await res.json();

  const paths = albums.map((post) => ({
    params: { key: post },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch("http://localhost:3000/api", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ key: params.key, action: "albumData" }),
  });

  const post = await res.json();

  return {
    props: { post },
  };
}

const Album = ({ post }) => {
  const router = useRouter();
  const { key } = router.query;
  const [lightboxPhotoID, setLightboxPhotoID] = useState(null);
  const action = "deletePhoto";
  const numPhotos = Object.keys(post?.data?.photos).length;
  console.log(numPhotos,"length")
  console.log(post,"post")

  let btnDelete = async function(photoID) {
    let confirmDelete = "Do you want to delete the photo?";
    if (confirm(confirmDelete) === true) {
      await fetch('http://localhost:3000/api', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }, body: JSON.stringify({
          action: action,
          photoID: photoID, 
          albumID: key,
      })
    });
    }
  };

  let time = post?.data?.timestamp;
  let date = new Date(time);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let today = date.getDate();
  let formattedTime = `${today}/${month}/${year}`;

  const numberOfColumns = 4;
  //console.log(post?.data,"post?.data?.photos")
  const photoKeys = Object.keys(post?.data?.photos);
  //console.log(photoKeys,"photoKeys")
  const columnArray = [];
  
  let column = 0;
  for (const [photoID, photoValue] of Object.entries(post?.data?.photos)) {
    if (!columnArray[column]) {
      columnArray[column] = [];
    }
    columnArray[column].push({id: photoID, sizes: photoValue?.sizes});
    column = (column + 1) % numberOfColumns;
  }
  
  return (
    <>
      <Container className="w-70">
        <div className="album">
          <h1 className="albumHeading">{post?.data?.name}</h1>
          <p className="text-muted">{post?.data?.desc}</p>
          <time>{formattedTime}</time>
          <p>
            -----------------------------------------------------------------
          </p>
          <div className="gallery">
            {columnArray.map((column, columnIndex) => {
              return (
                <div className="galleryColumn" key={columnIndex}>
                  {column.map((photo, photoIndex) => {
                    //console.log(photo,"photo")
                    //console.log(photoIndex,"photoIndex")
                    //console.log(photo?.sizes,"size")
                    const photoKey = photoKeys[photoIndex];
                    //console.log(photoKey,"photoKey")

                    return (
                      <div className="photoPreview" key={photoKey}>
                        <Image source="CS3" key={photoKey} id={photo?.id} sizes={photo?.sizes} alt=""/>
                        <div className="actions">
                          <img onClick={() => { setLightboxPhotoID(photo); }} className="iconGlass" src="/images/icon-magnifying.png" alt=""/>
                          <img onClick={() => btnDelete(photo)} className="iconTrash" src="/images/icon-trash.svg" alt=""/>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          {<Lightbox id={lightboxPhotoID} open={setLightboxPhotoID} />}
        </div>
      </Container>
    </>
  );
};

export default Album;

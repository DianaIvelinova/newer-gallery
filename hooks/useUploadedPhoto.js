import { useEffect, useState } from "react";

export default function useUploadedPhoto(uploadPhotoRef, photosPreviewRef) {
  const [photos, setPhotos] = useState([]);
  const [numActiveUploads, setNumActiveUploads ] = useState(0);

  useEffect(() => {
    uploadPhotoRef?.current?.addEventListener('change', async function(event) {
      Array.from(event.target.files).forEach(async file => {
        console.log(file);
        let img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        photosPreviewRef.current.appendChild(img);
        let data = new FormData();
        data.append("file", file);
        const uploadURL = await getImageURL();
        sendImgToCloudflare(data, uploadURL);
      });
    });
  },[uploadPhotoRef])
  
  async function getImageURL() {
    const reqImageURL = await fetch(
      `http://localhost:3000/api/imagesURL`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await reqImageURL.json();
    return data.url;
  }

  async function sendImgToCloudflare(data, uploadURL) {
    console.log(uploadURL,"uploadurl")
    setNumActiveUploads(numActiveUploads => numActiveUploads + 1);
    const response = await fetch(`${uploadURL}`, { method: "POST", body: data, });
    const resData = await response.json();

    setNumActiveUploads(numActiveUploads => numActiveUploads - 1);
    
    if (!resData?.result?.id) return 

    setPhotos( (items) => [...items, {id: resData?.result?.id, source: "net"}])
  }
  console.log(photos,"photos")

  return { photos, numActiveUploads }
}

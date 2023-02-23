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
        sendImgToCS3(data);
      });
    });
  },[uploadPhotoRef])

  async function sendImgToCS3(data) {
    try {    
      setNumActiveUploads(numActiveUploads => numActiveUploads + 1);
      const response = await fetch("https://media.garbamons.com/photos", {
        headers: {Authorization: 'Bearer 133244'},
        method: "POST",
        body: data,
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const resData = await response.json();
      
      const sizes = {};
      for (const [key, value] of Object.entries(resData?.sizes)) {
        let label = value?.width
        if (value.blurred) label = "blurred"
        if (value.original) label = "original"
        sizes[label] = { key: key, format: value.format };
      }

      if (!resData?.id) return;
      setPhotos((items) =>  [...items, { id: resData?.id, source: "CS3" ,sizes: sizes}])
      setNumActiveUploads(numActiveUploads => numActiveUploads - 1);
    } catch (error) {
      console.error(error);
      alert('Image upload failed');
    }
  }
  
  return { photos, numActiveUploads }
}

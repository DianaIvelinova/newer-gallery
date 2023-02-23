import React from "react";

function Image(props) {
  console.log(props,"props")
  function getPhotoSizeURL(name) {
    for (const [key, value] of Object.entries(props?.sizes)) {
      if (key == name ) { return `${process.env.NEXT_PUBLIC_URL_CS3}/${props.id}-${value.key}.${value?.format}`; } 
      else if (key == name ) { return `${process.env.NEXT_PUBLIC_URL_CS3}/${props.id}-${value.key}.${value?.format}`; }
    }
  }

  return (
    <>
      <img onClick={props.onClick} src={getPhotoSizeURL(400)} srcSet={`${getPhotoSizeURL(400)} 1x, ${getPhotoSizeURL(1250)} 2x`}
      />
    </>
  );
}

export default Image;

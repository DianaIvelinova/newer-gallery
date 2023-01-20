import React from "react";

function Image( props ) { 
    console.log(props,"props")

    return (
      <>
        <img src={`${process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_URL}/${props.id}/${props.width}}`} />
      </>
    );
  };
  
  export default Image;
  
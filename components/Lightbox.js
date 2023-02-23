import Image from "../components/Image"

export default function Lightbox(props) {
  //console.log(props,"propsLightbox")
  function close() {
	  props.open(null)
  }

  if (!props.id) return <></>;

  return (
    <>
      <div className="layer" onClick={() => close() }></div>
      <div className="lightbox">
        <button className="lightboxBtn" onClick={() => close()}>
          &#10006;
        </button>
        <div className="lightbox-content">
          <Image id={props?.id.id} size={props.id.sizes}  />
        </div>
      </div>
    </>
  );
}
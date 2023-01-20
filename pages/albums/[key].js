import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import Image from "../../components/Image";

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/albums");
  const albums = await res.json();

  const paths = albums.map((post) => ({
    params: { key: post },
  }))

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch("http://localhost:3000/api", {
    method: 'POST', 
    headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
    },
    body: JSON.stringify({key: params.key,
      action: "albumData"})
  });

  const post = await res.json();
  console.log("albumdata in keyjs",post)

  return {
    props: { post },
  };
}

const Album = ({ post }) => {
  const router = useRouter();
  const { key } = router.query;

  fetch("http://localhost:3000/api/imagesURL")

  let time = post?.data?.timestamp;
  let date = new Date(time);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let today = date.getDate();
  let formattedTime = `${today}/${month}/${year}`;

  return (
    <>
      <Container className="w-70">
        <div className="album">
          <h1 className="albumHeading">{post?.data?.name}</h1>
          <p className="text-muted">{post?.data?.desc}</p>
          <time>{formattedTime}</time>
          <p>-----------------------------------------------------------------</p>
          <div> {post?.data?.photos.map((photo) => { return <Image source={photo.source} key={photo.id} id={photo.id} width={100} alt="" />})} </div>
        </div>
      </Container>
    </>
  );
};

export default Album;

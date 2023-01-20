import {Container} from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer
        className="border-2 border-top border-secondary"
        style={{
          height: "30px",
          width: "100%",
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      >
        <Container>
          <p className="float-end">
            <a href="#">Back to top</a>
          </p>
          <p>
            &copy; 2022 <a href="#">Privacy</a> &middot; <a href="#">Terms</a>
          </p>{" "}
        </Container>
      </footer>
    </>
  );
};

export default Footer;

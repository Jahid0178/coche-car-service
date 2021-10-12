import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./Home.css";
import Car1 from "../../images/car1.png";
import Car2 from "../../images/car2.png";
import Car3 from "../../images/car3.png";

const Home = () => {
  return (
    <div className="home-container">
      <Container fluid>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100 mx-auto"
              src={Car1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 className="carosel-title fw-light">
                Mercedes AMG GT <span className="fw-bold">4 Door Coupe</span>
              </h1>
              <p className="carosel-desc">
                We all have a dream car some wish for a classy one where as
                others dream of having a simple old school one. If is often that
                you may see someone in a car and say
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-75 mx-auto"
              src={Car2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h1 className="carosel-title fw-light">
                Mercedes-AMG GT <span className="fw-bold">63 s 4matic+</span>
              </h1>
              <p className="carosel-desc">
                We all have a dream car some wish for a classy one where as
                others dream of having a simple old school one. If is often that
                you may see someone in a car and say
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-75 img-fluid mx-auto"
              src={Car3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1 className="carosel-title fw-light">
                Mercedes-AMG GT <span className="fw-bold">r roadster</span>
              </h1>
              <p className="carosel-desc">
                We all have a dream car some wish for a classy one where as
                others dream of having a simple old school one. If is often that
                you may see someone in a car and say
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Home;

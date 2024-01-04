import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMÍTAME <span className="purple"> PRESENTARME </span>
            </h1>
            <p className="home-about-body">
              Me enamoré de la programación y al menos he aprendido
              algo, creo... 🤷‍♂️
              <br />
              <br />Soy fluido en varios lenguajes de programación como
              <i>
                <b className="purple"> React, Python y SQL. </b>
              </i>
              <br />
              <br />
              Estoy interesado en la construccion de Nuevas &nbsp;
              <i>
                <b className="purple">Tecnologías y productos web.</b>
              </i>
              <br />
              <br />
              Cuando es posible, también aplico mi pasión por desarrollar productos con <b className="purple">Node.js</b> y
              <i>
                <b className="purple">
                  {" "}
                  bibliotecas y frameworks modernos de JavaScript, como
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUENTRAME EN</h1>
            <p>
              No dudes en <span className="purple">contactarte </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/JuanErcole"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/juanercole-developer/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy <span className="purple">Juan Ercole </span>
            de <span className="purple"> Córdoba, Argentina.</span>
            <br />
            Actualmente trabajo como desarrollador Full Stack en Vates Software.
            <br />
            Cuento con mas de 35 certificaciones en tecnologías de la información y en constante aprendizaje.
            <br />
            <br />
            Además de programar, ¡hay otras actividades que me encanta hacer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar Videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Ejercitarme
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Comprometido a esforzarme y construir soluciones que generen un impacto significativo!"{" "}
          </p>
          <footer className="blockquote-footer">Juan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

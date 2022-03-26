import React from "react";
import "./Footer.css";

export const Footer: React.FC<{}> = () => {
  return (
    <div className="footer">
      <div className="footer-topline" />

      <div className="footer-container">
        <div className="footer-logo">
          <img src="/images/arkabia-logo.svg" alt="" />
          <p className="paragraph">
            Make it possible.
            <br />
            © 2021 Arkabia S.A.
            <br />
            Todos los derechos reservados.
          </p>
          <div className="footer-social">
            <a href="#">
              <img src="/images/facebook-logo.svg" alt="" />
            </a>
            <a href="#">
              <img src="/images/linkedin-logo.svg" alt="" />
            </a>
            <a href="#">
              <img src="/images/instagram-logo.svg" alt="" />
            </a>
            <a href="#">
              <img src="/images/twitter-logo.svg" alt="" />
            </a>
          </div>
        </div>

        <div className="footer-your-space">
          <h3 className="paragraph-header">Tu espacio</h3>
          <a href="#" className="paragraph">
            Panel principal
          </a>
          <a href="#" className="paragraph">
            Servicios
          </a>
        </div>

        <div className="footer-legal">
          <h3 className="paragraph-header">Legales</h3>
          <a href="#" className="paragraph">
            Preguntas frecuentes
          </a>
          <a href="#" className="paragraph">
            Términos y condiciones
          </a>
          <a href="#" className="paragraph">
            Politica de privacidad
          </a>
        </div>

        <div className="footer-meetus">
          <h3 className="paragraph-header">Conócenos</h3>
          <a href="#" className="paragraph">
            Quienes somos
          </a>
          <a href="#" className="paragraph">
            Inversionistas
          </a>
          <a href="#" className="paragraph">
            Trabaja con nosotros
          </a>
        </div>
      </div>
    </div>
  );
};

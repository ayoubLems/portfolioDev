import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji(
            "🚀 Propulsé par la passion et le code | Ayoub Lemsoudi © 2025"
          )}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Connectons-nous :{" "}
          <a
            href="https://www.linkedin.com/in/ayoub-lemsoudi-597a85201/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/ayoubLems"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a href="mailto:lemsoudi.pro@gmail.com" rel="noopener noreferrer">
            Email
          </a>
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("💡 Idées, projets ou collaborations ? Discutons-en !")}
        </p>
      </div>
    </Fade>
  );
}

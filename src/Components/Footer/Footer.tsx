import React from "react";
import "./Footer.scss";

export type FooterProps = {
  title: string;
  year?: number;
};

export const Footer = ({ title, year }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__app">
        © <span data-testid="copyright-year">{year || currentYear}</span>
        <span data-testid="footer-title">{title}</span>
      </div>
      <div className="footer__social">
        <a href="https://github.com/reactstrap/reactstrap">
          <img src="images/github.png" alt="GitHub"></img>
        </a>
      </div>
    </footer>
  );
};

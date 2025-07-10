import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-center text-lg-start">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "black",color:"white" }} // Changed to object format
      >
        © {new Date().getFullYear()} Copyright:   
        <a className="ps-3 text-white" href="#">
          Niks Nimje
        </a>
      </div>
    </footer>
  );
};

export default Footer;

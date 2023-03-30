import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 py-3">
            <p>
              Delicous recipies from
              <br />
              the renowned team of masterchefs
              <br />
              <a href="https://github.com/Yadu2Priya"style={{ color: "black" }}>Yadu2Priya</a>,
              <a href="https://github.com/Konstrukteur"style={{ color: "black" }}> Konstrukteur</a>,
              <a href="https://github.com/sb-olr"style={{ color: "black" }}>sb-olr</a>
            </p>
            <span className="text-muted">
              <p className="copyright">
                Copyright@2023 <span>Yadu2Priya</span>
              </p>
            </span>
          </div>
          <div className="col-12 col-md-6 py-3">
            <div className="icon-container">
              <a className="navbar-brand" href="#">
                <i className="bx bx-restaurant"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

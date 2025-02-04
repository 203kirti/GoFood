import React from "react";

function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <link
          to="/"
          className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
        ></link>
        <span className="mb-3 mb-md-0 text-white">© 2024 GoFood, Inc</span>
      </div>
    </footer>
  );
}

export default Footer;

import React, { Component } from "react";
import "../styles/footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer
        className="page-footer font-small blue"
        style={{ backgroundColor: "rgb(20, 88, 143" }}
      >
        <div className="footer-copyright text-center py-2">
          <p className="m-0 text-white">@2020 All rights reserved</p>
        </div>
      </footer>
    );
  }
}

export default Footer;

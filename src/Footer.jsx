import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-black text-white d-flex justify-content-center align-items-center flex-column p-2">
        <h3 className="bg-light p-2 text-dark">Hire me!</h3>
        <p>I'm currently looking for a job. Would you like to discuss?</p>{" "}
        <a
          href="https://saood011.github.io"
          className="d-flex justify-content-center text-warning"
          target="blank"
        >
          <span>Check Portfolio</span>
          <i className="material-icons">contacts</i>
        </a>
        <h5 className="p-3 d-flex justify-content-center">
          Contact <i className="material-icons">double_arrow</i>{" "}
        </h5>
        <p className="m-0">+49-15210920149</p>
        <p>saood011@yahoo.com</p>
      </footer>
    );
  }
}

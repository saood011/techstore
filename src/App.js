import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export class App extends Component {
  render() {
    return (
      <div className="container min-height d-flex flex-column justify-content-between bg-light p-0">
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default App;

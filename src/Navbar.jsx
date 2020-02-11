import React, { Component } from "react";
import Fetch from "./fetchComp";
import Modal from "react-responsive-modal";
import { animations } from "react-animation";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      open: false
    };
  }
  getData = cart => {
    this.setState({ cart });
  };

  onClick = e => {
    this.state.cart.splice(e.target.id, e.target.id + 1);
    console.log(this.state.cart);
    this.forceUpdate();
  };
  calculateTotal(price, quantity) {
    const result = price * quantity;
    return "$" + result.toFixed(2);
  }
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;

    return (
      <div className="text-center ">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark jumbo m-0 ">
          <p className="navbar-brand text-white border p-2 mt-2 rounded">
            TechStore
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <p className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </p>
              </li>
              <li className="nav-item"></li>
            </ul>
          </div>

          <button
            className="btn btn-warning position-fixed"
            onClick={this.onOpenModal}
          >
            <i class="material-icons">shopping_cart</i>
            {this.state.cart.length > 0 ? (
              <span
                class="badge badge-danger"
                style={{ animation: animations.slideIn }}
              >
                {this.state.cart.length}
              </span>
            ) : null}
          </button>
          <Modal open={open} onClose={this.onCloseModal} center>
            {this.state.cart.length === 0 ? (
              <div className="">
                Cart is empty!!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            ) : (
              <table className="table table-striped text-center w-100">
                <tbody>
                  <tr>
                    <th colSpan="6" className="text-center">
                      YOUR CART
                    </th>
                  </tr>

                  {this.state.cart.map((v, i) => (
                    <tr key={i}>
                      <td>{i + 1}.</td>
                      <td style={{ width: "20%", background: "grey" }}>
                        <img className="w-100" src={v[0].image} alt="" />
                      </td>
                      <td>
                        {v[0].title} <p>{v[0].price}</p>
                      </td>
                      <td> </td>

                      <td className="text-center">
                        <button
                          id={i}
                          className="btn btn-light btn-sm rounded-circle"
                          onClick={this.onClick}
                        >
                          delete
                        </button>
                      </td>
                      <td className="text-danger">
                        {this.calculateTotal(v[0].price.slice(1), 1)}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="5" className="text-right">
                      Grand total
                    </td>
                    <td className="bg-secondary text-danger h4">
                      $
                      {this.state.cart
                        .map(v => v[0].price.slice(1))
                        .reduce((a, b) => Number(a) + Number(b), 0)
                        .toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="6" className="text-center">
                      <button className="btn btn-warning m-1">Check Out</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          </Modal>
        </nav>
        <Fetch getDataTrigger={this.getData} />
      </div>
    );
  }
}

export default Navbar;

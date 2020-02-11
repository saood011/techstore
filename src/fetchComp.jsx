import React from "react";
import "./App.css";
import DetailedInfo from "./detailedInfo";
import { animations } from "react-animation";

export default class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      cart: [],
      search: "",
      detailedInfo: true,
      detailedItems: []
    };
  }

  sendData = () => {
    this.props.getDataTrigger(this.state.cart);
  };

  onClick = e => {
    var cart = this.state.items.slice(e.target.id, Number(e.target.id) + 1);
    this.state.cart.push(cart);
    console.log(this.state.cart);
    this.sendData();
  };

  onChange = e => {
    this.setState({ search: e.target.value });
  };
  //detail info page
  detailed = isbn => {
    this.setState({ detailedInfo: false });
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api = `${proxy}https://api.itbook.store/1.0/books/${isbn}`;
    fetch(api)
      .then(res => res.json())
      .then(
        result => {
          console.log([result]);
          this.setState({
            isLoaded: true,
            detailedItems: [result]
          });
        },

        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };
  // adding item from detailed page
  remoteCart = item => {
    console.log(item);
    this.state.cart.push(item);
    this.sendData();
    setTimeout(() => {
      this.setState({ detailedInfo: true });
    }, 700);
  };

  // sorting PRICE ascending
  sortAscend = (a, b) => {
    const priceA = parseFloat(a.price.slice(1));
    const priceB = parseFloat(b.price.slice(1));
    console.log(typeof priceA);
    let comparison = 0;
    if (priceA > priceB) {
      comparison = 1;
    } else if (priceA < priceB) {
      comparison = -1;
    }
    return comparison;
  };
  // sorting PRICE descending
  sortDes = (a, b) => {
    const priceA = parseFloat(a.price.slice(1));
    const priceB = parseFloat(b.price.slice(1));

    let comparison = 0;
    if (priceA > priceB) {
      comparison = 1;
    } else if (priceA < priceB) {
      comparison = -1;
    }
    return comparison * -1;
  };

  //displaying sorted result
  sorted = ascORdes => {
    this.setState({ items: this.state.items.sort(ascORdes) });
  };

  // default loading page
  componentDidMount() {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api = `${proxy}https://api.itbook.store/1.0/new`;
    fetch(api)
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result.books
          });
        },

        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  // search result
  onSearch = searchTerm => {
    this.setState({ isLoaded: false, search: searchTerm });
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api = `${proxy}https://api.itbook.store/1.0/search/${searchTerm}`;
    fetch(api)
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result.books
          });
        },

        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };

  render() {
    const { error, isLoaded, items, detailedInfo, detailedItems } = this.state;
    const suggestions = [
      "Python",
      "Javascript",
      "HTML",
      "Latest",
      "Mongodb",
      "Kotlin",
      "Ruby",
      "React",
      "Angular",
      "Vue",
      "Typescript",
      "Linux",
      "Networking"
    ];
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded && detailedInfo) {
      return (
        <div>
          <div className="d-flex mt-2 justify-content-center flex-column">
            <div style={{ animation: animations.fadeIn }}>
              {suggestions.map((v, i) => (
                <button
                  key={i}
                  className="btn btn-sm bg-light rounded-pill shadow text-secondary p-2 m-1"
                  onClick={() => this.onSearch(v)}
                >
                  {v}
                </button>
              ))}
            </div>
            <div className="d-flex mt-2 justify-content-center ">
              <input
                type="text"
                onChange={this.onChange}
                className="form-control w-25 mr-1 shadow"
                placeholder="Search here"
              />
              <button
                type="button"
                onClick={() => this.onSearch(this.state.search)}
                className="btn btn-warning"
              >
                Search
              </button>
            </div>
          </div>
          <div className="spinner-border mt-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    } else if (!detailedInfo) {
      return <DetailedInfo data={detailedItems} remoteCart={this.remoteCart} />;
    } else {
      return (
        <div className="">
          <div className="d-flex mt-2 justify-content-center flex-column">
            <div>
              {suggestions.map((v, i) => (
                <button
                  key={i}
                  className="btn btn-sm bg-light rounded-pill shadow text-secondary p-2 m-1"
                  onClick={() => this.onSearch(v)}
                >
                  {v}
                </button>
              ))}
            </div>
            <div className="d-flex mt-2 justify-content-around flex-wrap ">
              <button
                className="btn btn-sm btn-outline-secondary m-1"
                onClick={() => this.sorted(this.sortAscend)}
              >
                Price: Lowest First
              </button>
              <div className="d-flex">
                <input
                  type="text"
                  onChange={this.onChange}
                  className="form-control mr-1 shadow"
                  placeholder="Search here"
                />
                <button
                  type="button"
                  onClick={() => this.onSearch(this.state.search)}
                  className="btn btn-warning"
                >
                  search
                </button>
              </div>

              <button
                className="btn btn-sm btn-outline-secondary m-1"
                onClick={() => this.sorted(this.sortDes)}
              >
                Price: Highest First
              </button>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-center ">
            {items.map((item, i) => (
              <div
                className="card m-1 shadow grey-card"
                key={item.isbn13}
                style={{ animation: animations.bounceIn }}
              >
                <img
                  src={item.image}
                  className="card-img-top"
                  alt="Book_cover"
                  onClick={() => this.detailed(item.isbn13)}
                  title="Click the image for details"
                />
                <div className="card-body bg-light">
                  <h6 className="card-title">{item.title}</h6>
                  <div className="d-flex justify-content-between">
                    <p className=" btn-sm btn-danger">{item.price}</p>
                    <p
                      className="btn-sm btn-primary btn-hover"
                      id={i}
                      onClick={this.onClick}
                      title="Click to add"
                    >
                      Add to cart
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

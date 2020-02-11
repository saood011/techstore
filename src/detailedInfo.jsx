import React, { Component } from "react";
import { animations } from "react-animation";

export default class DetailedInfo extends Component {
  addtoCart = item => {
    this.props.remoteCart(item);
  };
  render() {
    return (
      <div className="container mb-2">
        {this.props.data.length > 0 ? (
          this.props.data.map(book => (
            <div className="row" key={book.isbn13}>
              <div
                className="col-sm grey-card"
                style={{ animation: animations.popIn }}
              >
                <img src={book.image} alt="Book-Cover" className="w-100" />
              </div>
              <div className="col-sm p-0">
                <table className="table table-striped text-left">
                  <tbody>
                    <tr>
                      <td className="font-weight-bold">Title</td>
                      <td>{book.title}</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">Price</td>
                      <td className="text-danger">{book.price}</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">Rating</td>
                      <td
                        className={
                          parseInt(book.rating) < 1
                            ? "text-muted"
                            : "text-warning"
                        }
                      >
                        {parseInt(book.rating) < 1
                          ? "No Ratings"
                          : [...Array(parseInt(book.rating))].map((star, i) => (
                              <i className="material-icons" key={i}>
                                star
                              </i>
                            ))}
                      </td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">Author</td>
                      <td>{book.authors}</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">Publisher</td>
                      <td>{book.publisher}</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">Published</td>
                      <td>{book.year}</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">Pages</td>
                      <td>{book.pages}</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">Language</td>
                      <td>{book.language}</td>
                    </tr>

                    <tr>
                      <td className="font-weight-bold">ISBN-10</td>
                      <td>{book.isbn10}</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">Description</td>
                      <td className="text-justify">{book.desc}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="d-flex justify-content-around">
                  <a href="/" className="btn btn-warning">
                    back
                  </a>
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      this.addtoCart([
                        {
                          price: book.price,
                          title: book.title,
                          image: book.image
                        }
                      ])
                    }
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="mt-5">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow " role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

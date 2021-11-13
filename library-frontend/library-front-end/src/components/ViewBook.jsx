import React, { Component } from "react";
import BookService from "../services/BookService";

class ViewBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      book: {},
    };
  } //constructor

  componentDidMount() {
    BookService.getBookById(this.state.id).then(res => {
      this.setState({ book: res.data });
    });
  }

  goBack() {
    this.props.history.push("/books");
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              <h3 className='text-center'>View Book Details</h3>
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label>Book ID: </label>
                    <input
                      placeholder={this.state.book.id}
                      readOnly={true}
                      name='id'
                      className='form-control'
                    />
                  </div>
                  <div className='form-group'>
                    <label>Book Title: </label>
                    <input
                      placeholder={this.state.book.title}
                      readOnly={true}
                      name='title'
                      className='form-control'
                    />
                  </div>
                  <div className='form-group'>
                    <label>Book Author: </label>
                    <input
                      placeholder={this.state.book.author}
                      readOnly={true}
                      name='author'
                      className='form-control'
                    />
                  </div>
                  <div className='form-group'>
                    <label>Book Genre: </label>
                    <input
                      placeholder={this.state.book.genre}
                      readOnly={true}
                      name='genre'
                      className='form-control'
                    />
                  </div>
                  <button
                    id='view-btn'
                    className='btn btn-warning'
                    onClick={this.goBack.bind(this)}
                  >
                    {" "}
                    Go back{" "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewBook;

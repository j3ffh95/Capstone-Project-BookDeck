import React, { Component } from "react";
import BookService from "../services/BookService";

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      author: "",
      genre: "",
    };

    this.idHandler = this.idHandler.bind(this);
    this.titleHandler = this.titleHandler.bind(this);
    this.authorHandler = this.authorHandler.bind(this);
    this.genreHandler = this.genreHandler.bind(this);
  } //constructor

  idHandler = event => {
    this.setState({
      id: event.target.value,
    });
  };

  titleHandler = event => {
    this.setState({
      title: event.target.value,
    });
  };

  authorHandler = event => {
    this.setState({
      author: event.target.value,
    });
  };

  genreHandler = event => {
    this.setState({
      genre: event.target.value,
    });
  };

  saveBook = e => {
    e.preventDefault();
    let book = {
      id: this.state.id,
      title: this.state.title,
      author: this.state.author,
      genre: this.state.genre,
    };
    // console.log(book);
    BookService.createBook(book)
      .then(res => {
        this.props.history.push("/books");
      })
      .catch(err => {
        console.log("record not saved.");
      });
  }; //closing save method

  cancel() {
    this.props.history.push("/books");
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              <h3 className='text-center'>Add Book</h3>
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label>Book ID: </label>
                    <input
                      placeholder='Id'
                      name='id'
                      className='form-control'
                      value={this.state.id}
                      onChange={this.idHandler}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Book Title: </label>
                    <input
                      placeholder='Enter Book Title'
                      name='title'
                      className='form-control'
                      value={this.state.title}
                      onChange={this.titleHandler}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Book Author: </label>
                    <input
                      placeholder='Author'
                      name='author'
                      className='form-control'
                      value={this.state.author}
                      onChange={this.authorHandler}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Book Genre: </label>
                    <input
                      placeholder='Genre'
                      name='genre'
                      className='form-control'
                      value={this.state.genre}
                      onChange={this.genreHandler}
                    />
                  </div>
                  <button
                    id='update-btn'
                    className='btn btn-success'
                    onClick={this.saveBook}
                  >
                    {" "}
                    Save{" "}
                  </button>
                  <button
                    id='delete-btn'
                    className='btn btn-danger'
                    onClick={this.cancel.bind(this)}
                  >
                    {" "}
                    Go Back{" "}
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

export default AddBook;

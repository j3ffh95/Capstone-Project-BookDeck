import React, { Component } from "react";
import BookService from "../services/BookService";

class DeleteBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      title: "",
      author: "",
      genre: "",
    };

    this.deleteBook = this.deleteBook.bind(this);
  } //constructor

  componentDidMount() {
    BookService.getBookById(this.state.id).then(res => {
      let book = res.data;
      this.setState({
        title: book.title,
        author: book.author,
        genre: book.genre,
      });
    });
  }

  deleteBook = e => {
    e.preventDefault();
    let book = {
      id: this.state.id,
      title: this.state.title,
      author: this.state.author,
      genre: this.state.genre,
    };

    console.log(book);
    BookService.deleteBook(this.state.id).then(res => {
      this.props.history.push("/books");
    });
  };

  cancel() {
    this.props.history.push("/books");
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              <h3 className='text-center'>Delete Book</h3>
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label>Book ID: </label>
                    <input
                      placeholder='Id'
                      readOnly='true'
                      name='id'
                      className='form-control'
                      value={this.state.id}
                      onChange={this.idHandler}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Book Title: </label>
                    <input
                      placeholder='Title'
                      readOnly='true'
                      name='title'
                      className='form-control'
                      value={this.state.title}
                      onChange={this.nameHandler}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Book Author: </label>
                    <input
                      placeholder='Author'
                      readOnly='true'
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
                      readOnly='true'
                      name='genre'
                      className='form-control'
                      value={this.state.genre}
                      onChange={this.genreHandler}
                    />
                  </div>
                  <button
                    id='update-btn'
                    className='btn btn-success'
                    onClick={this.deleteBook}
                  >
                    {" "}
                    Delete{" "}
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

export default DeleteBook;

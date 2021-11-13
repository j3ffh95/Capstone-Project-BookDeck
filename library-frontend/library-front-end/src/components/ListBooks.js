import React, { Component } from "react";
import BookService from "../services/BookService";

class ListBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
    this.addBook = this.addBook.bind(this);
    this.editBook = this.editBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.viewBook = this.viewBook.bind(this);
  }

  componentDidMount() {
    BookService.getBooks().then(res => {
      this.setState({ books: res.data });
    });
  }

  addBook() {
    this.props.history.push("/add-book");
  }

  editBook(id) {
    this.props.history.push(`/update-book/${id}`);
  }

  deleteBook(id) {
    this.props.history.push(`/delete-book/${id}`);
    // BookService.deleteBook(id).then(res => {
    //     this.setState({
    //          book: this.state.books.filter(book => book.id !== id)
    //     })
    // })
  }

  viewBook(id) {
    this.props.history.push(`/view-book/${id}`);
  }

  render() {
    return (
      <div>
        <h2 className='text-center'>Book List</h2>
        <div className='add-btn-container'>
          <button
            className='btn btn-primary'
            id='add-btn'
            onClick={this.addBook}
          >
            {" "}
            Add Book
          </button>
        </div>
        {/* <div>
          <p></p>
        </div> */}
        <div className='row'>
          <table
            className='table table-striped table-bordered'
            id='table-style'
          >
            <thead>
              <tr>
                <th>Book Id</th>
                <th>Book Title</th>
                <th>Book Author</th>
                <th>Book Genre</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.books.map(book => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.genre}</td>
                  <td>
                    <button
                      onClick={() => this.editBook(book.id)}
                      id='update-btn'
                      className='btn btn-primary'
                    >
                      Update
                    </button>
                    <button
                      onClick={() => this.deleteBook(book.id)}
                      id='delete-btn'
                      className='btn btn-danger'
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => this.viewBook(book.id)}
                      id='view-btn'
                      className='btn btn-warning'
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListBooks;

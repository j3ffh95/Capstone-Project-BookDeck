import axios from "axios";

const LIBRARY_API_BASE_URL = "http://localhost:8080/api";
class BookService {
  getBooks() {
    console.log("Got the books");
    return axios.get(LIBRARY_API_BASE_URL + "/allbooks");
  }

  createBook(book) {
    return axios.post(LIBRARY_API_BASE_URL + "/addbook", book);
  }

  getBookById(id) {
    return axios.get(LIBRARY_API_BASE_URL + "/book/" + id);
  }

  updateBook(book, id) {
    return axios.put(LIBRARY_API_BASE_URL + "/book/" + id, book);
  }

  deleteBook(id) {
    return axios.delete(LIBRARY_API_BASE_URL + "/book/" + id);
  }
}

export default new BookService();

import ListBooks from "./components/ListBooks";
import AddBook from "./components/AddBook";
import UpdateBook from "./components/UpdateBook";
import DeleteBook from "./components/DeleteBook";
import ViewBook from "./components/ViewBook";
import HeroSection from "./components/HeroSection";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        {/* <HeroSection /> */}
        <div className='container'>
          <Routes>
            <Route path='/' exact component={ListBooks}></Route>
            <Route path='/books' component={ListBooks}></Route>
            <Route path='/add-book' component={AddBook}></Route>
            <Route path='/update-book/:id' component={UpdateBook}></Route>
            <Route path='/delete-book/:id' component={DeleteBook}></Route>
            <Route path='/view-book/:id' component={ViewBook}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

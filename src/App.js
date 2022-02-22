/* eslint-disable react/jsx-wrap-multilines */
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Book from './components/Book';
import AddBook from './components/AddBook';
import Categories from './components/Categories';

function App() {
  const bookState = useSelector((state) => state.book);

  const BookCollection = bookState.map((book) => (
    <Book
      key={book.id}
      id={book.id}
      bookTitle={book.title}
      bookAuthor={book.author}
      bookCategory={book.category}
      chapter="Chapter 17"
      progressPercent="64%"
    />
  ));

  return (
    <Router>
      <div className="App">
        <div className="main-container">
          <Header headTitle="BookStore CMS" />
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <div className="books-main-conatainer">{BookCollection}</div>
                  <div className="hr">&nbsp;</div>
                  <AddBook />
                </div>
              }
            />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

/*

 bookTitle="The Hunger Games"
 bookAuthor="Suzaanne Collins"
 bookCategory="Action"

 bookTitle="Dune "
bookAuthor="Frank Herbert"
 ookCategory="Science Fiction"

  bookTitle="Capital in the Twenty-First Century"
  bookAuthor="Suzaanne Collins"
  bookCategory="Economy"

*/

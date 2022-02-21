import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Book from './components/Book';
import AddBook from './components/AddBook';
import Categories from './components/Categories';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-container">
          <Header headTitle="BookStore CMS" />
          <Routes>
            <Route
              path="/"
              element={(
                <div>
                  <div className="books-main-conatainer">
                    <Book
                      bookTitle="The Hunger Games"
                      bookAuthor="Suzaanne Collins"
                      bookCategory="Action"
                      chapter="Chapter 17"
                      progressPercent="64%"
                    />
                    <Book
                      bookTitle="Dune "
                      bookAuthor="Frank Herbert"
                      bookCategory="Science Fiction"
                      chapter="Chapter 3: *A Lesson Learned*"
                      progressPercent="8%"
                    />
                    <Book
                      bookTitle="Capital in the Twenty-First Century"
                      bookAuthor="Suzaanne Collins"
                      bookCategory="Economy"
                      chapter="Introduction"
                      progressPercent="0%"
                    />
                  </div>
                  <div className="hr">&nbsp;</div>
                  <AddBook />
                </div>
              )}
            />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

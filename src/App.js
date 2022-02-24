/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-wrap-multilines */
import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { css } from '@emotion/react';
import RingLoader from 'react-spinners/RingLoader';
import Header from './components/Header';
import Book from './components/Book';
import AddBook from './components/AddBook';
import Categories from './components/Categories';
import { fetchBooks } from './redux/books/books';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchBooks()), []);
  const books = useSelector((state) => state.book);
  const { loading } = books;
  const { error } = books;
  const BookCollection = books.book.map((book) => (
    <Book
      key={book.item_id}
      id={book.item_id}
      bookTitle={book.title}
      bookAuthor={book.author}
      bookCategory={book.category}
      chapter="Chapter 17"
      progressPercent="64%"
    />
  ));

  // : setLoader(true);
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const color = '#456478';

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
                  <div className="books-main-conatainer">
                    <div className="err-style">{error}</div>
                    {BookCollection}
                    <RingLoader
                      color={color}
                      loading={loading}
                      css={override}
                      size={60}
                    />
                  </div>
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

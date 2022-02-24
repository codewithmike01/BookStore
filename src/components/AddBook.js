/* eslint-disable operator-linebreak */
import React from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { postBooks } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const submitBookToStore = (event) => {
    event.preventDefault();

    if (
      event.target.title.value.trim() &&
      event.target.Category.value.trim() &&
      event.target.author.value.trim()
    ) {
      const concateTitle = `${event.target.title.value}:${event.target.author.value}`;
      let newBook = {
        item_id: uuid(),
        title: concateTitle,
        category: event.target.Category.value,
      };
      dispatch(postBooks(newBook));
      const { title, author } = event.target;
      title.value = '';
      author.value = '';
      newBook = {};
    } else alert('Empty Value not allowed ---- Will modify to a Popup later');
  };

  return (
    <div className="add-book-container">
      <h4> ADD NEW BOOK</h4>
      <form className="add-book-form" onSubmit={(e) => submitBookToStore(e)}>
        <div className="upper-form-content">
          <input type="text" placeholder="Book title" name="title" />
          <input type="text" placeholder=" Book Author" name="author" />
          <select name="Category" required>
            <option defaultValue>Category</option>
            <option value="Action"> Action</option>
            <option value="Science Fiction"> Science Fiction</option>
            <option value="Economy"> Econnomy</option>
          </select>
        </div>
        <div className="btn-container">
          <button type="submit">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
};
export default AddBook;

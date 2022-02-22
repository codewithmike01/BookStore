import React from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const submitBookToStore = (event) => {
    event.preventDefault();

    if (
      event.target.title.value.trim()
      && event.target.Category.value.trim()
      && event.target.author.value.trim()
    ) {
      const newBook = {
        id: uuid(),
        title: event.target.title.value,
        author: event.target.author.value,
        category: event.target.Category.value,
      };

      dispatch(addBook(newBook));
      const { title, author } = event.target;
      title.value = '';
      author.value = '';
    } else alert('Empty Value not allowed ---- Will modify to a Popup later');
  };

  return (
    <div className="add-book-container">
      <h4> ADD NEW BOOK</h4>
      <form className="add-book-form" onSubmit={(e) => submitBookToStore(e)}>
        <input type="text" placeholder="Book title" name="title" />
        <input type="text" placeholder=" Book Author" name="author" />
        <select name="Category" required>
          <option value="Action"> Action</option>
          <option value="Science Fiction"> Science Fiction</option>
          <option value="Economy"> Econnomy</option>
        </select>

        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};
export default AddBook;

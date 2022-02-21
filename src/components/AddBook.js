import React from 'react';

const AddBook = () => (
  <div className="add-book-container">
    <h4> ADD NEW BOOK</h4>

    <form className="add-book-form">
      <input type="text" placeholder="Book title" />
      <select name="Category" required>
        <option value="Action"> Action</option>
        <option value="Science Fiction"> Science Fiction</option>
        <option value="Economy"> Econnomy</option>
      </select>
      <button type="button">ADD BOOK</button>
    </form>
  </div>
);

export default AddBook;

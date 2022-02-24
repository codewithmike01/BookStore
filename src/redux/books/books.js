/* eslint-disable operator-linebreak */
/* eslint-disable prefer-destructuring */
/* eslint-disable comma-dangle */
/* eslint-disable arrow-body-style */
/*
'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/sXZuhpuTp5CXX2xHyuRX/books',

*/
const apiBaseUrl =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/sXZuhpuTp5CXX2xHyuRX/books';
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS_REQUEST = 'FETCH_BOOK_REQUEST ';
const FETCH_BOOKS_SUCCESS = 'bookStore/books/FETCH_BOOK';
const FETCH_BOOKS_FAILURE = 'FETCH_BOOK_FAILURE';

const initialState = {
  loading: false,
  book: [],
  error: '',
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const fetchBookRequest = () => ({
  type: FETCH_BOOKS_REQUEST,
});

export const fetchBookSuccess = (payload) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload,
});

export const fetchBookFailure = (payload) => ({
  type: FETCH_BOOKS_FAILURE,
  payload,
});

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        loading: false,
        book: [...state.book, action.payload],
      };

    case REMOVE_BOOK:
      return {
        ...state,
        book: [...state.book.filter((book) => book.item_id !== action.payload)],
      };

    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        book: [...state.book, action.payload],
      };
    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return { ...state };
  }
};

export const fetchBooks = () => async (dispatch) => {
  try {
    dispatch(fetchBookRequest());
    const response = await fetch(apiBaseUrl);
    const data = await response.json();
    const finalData = Object.entries(data);
    if (finalData) {
      const bookArr = [];
      Object.keys(finalData).forEach((key) => {
        bookArr.push(finalData[key]);
      });
      const bookData = bookArr.map((book) => {
        return {
          item_id: book[0],
          title: book[1][0].title.split(':')[0],
          author: book[1][0].title.split(':')[1] || '',
          category: book[1][0].category,
        };
      });
      bookData.forEach((item) => {
        dispatch(fetchBookSuccess(item));
      });
    }
  } catch {
    dispatch(fetchBookFailure('Error ecountered try reloading page'));
  }
};

export const postBooks = (obj) => async (dispatch) => {
  let objNew = {
    item_id: obj.item_id,
    title: obj.title.split(':')[0],
    category: obj.category,
    author: obj.title.split(':')[1],
  };
  dispatch(addBook(objNew));

  await fetch(apiBaseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  objNew = {};
};

export const deleteBook = (id) => async (dispatch) => {
  dispatch(removeBook(id));
  await fetch(`${apiBaseUrl}/${id}`, {
    method: 'DELETE',
  });
};

export default reducer;

// eslint-disable-next-line object-curly-newline
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import booksReducer from './books/books';

const rootReducer = combineReducers({
  book: booksReducer,
});

const store = createStore(
  rootReducer,
  compose(composeWithDevTools(applyMiddleware(logger, thunk))),
);
export default store;

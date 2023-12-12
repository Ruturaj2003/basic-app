import React, { Fragment } from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';

import { books } from './books';
import { Book } from './Book';

function BookList() {
  return (
    <div>
      <h1 className="heading">Amazon BEST-SELLERS</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} num={index} key={book.id} />;
        })}
      </section>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList></BookList>);

export default BookList;

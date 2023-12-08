import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71CX11nGhWL._SY342_.jpg"
        alt="Oath and Honor: A Memoir and a Warning"
      />
      <h2>Oath and Honor: A Memoir and a Warning</h2>
      <h4>Liz Cheney</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList></BookList>);

export default BookList;

import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  );
};
const Image = () => (
  <img
    src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71CX11nGhWL._SY342_.jpg"
    alt="Oath and Honor: A Memoir and a Warning"
  />
);
const Title = () => {
  return <h2>Oath and Honor: A Memoir and a Warning</h2>;
};
const Author = () => <h4>Liz Cheney</h4>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList></BookList>);

export default BookList;

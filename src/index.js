import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';

const books = [
  {
    author: ' B. Dylan Hollis',
    title: 'Baking Yesteryear: The Best Recipes from the 1900s to the 1980s',
    img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81o-PyNHxbL._SY342_.jpg',
    id: 1,
  },
  {
    author: ' Snoop Dogg ',
    title: "From Crook to Cook: Platinum Recipes from Tha Boss Dogg's Kitchen",
    img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/512TiHNyEIL._SX342_SY445_.jpg',
    id: 2,
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList></BookList>);

export default BookList;

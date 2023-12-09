import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';

const firstBook = {
  author: ' B. Dylan Hollis',
  title: 'Baking Yesteryear: The Best Recipes from the 1900s to the 1980s',
  img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81o-PyNHxbL._SY342_.jpg',
};
const secondBook = {
  author: ' Snoop Dogg ',
  title: "From Crook to Cook: Platinum Recipes from Tha Boss Dogg's Kitchen",
  img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/512TiHNyEIL._SX342_SY445_.jpg',
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
        </p>
        <button>click me</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
}

// const Book = ({ img, title, author, children }) => {
//   // rest of the logic
// };
const Book = (props) => {
  const { img, title, author, children } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList></BookList>);

export default BookList;

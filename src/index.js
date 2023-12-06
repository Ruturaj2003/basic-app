import React from 'react';
// import { ReactDOM } from 'react';
import ReactDOM from 'react-dom/client';

function Greeting(params) {
  return (
    <div>
      <Person></Person>
      <Message></Message>
    </div>
  );
}

const Person = () => <h2>Ray kun</h2>;
const Message = () => <p>Is the Developer</p>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);

export default Greeting;

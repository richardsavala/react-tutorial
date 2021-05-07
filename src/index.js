import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";
const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81PcDomicZL._UX300__PJprime-reading,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg",
    title: "The Giving Tree",
    author: "Shel Silverstein",
  },
  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81n1G6Cp7wL._UX300__PJprime-reading,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg",
    title: "The Bad Seed",
    author: "Jory John",
  },
  {
    id: 3,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81zhvrYl7yL._UX300__PJprime-reading,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // atrtibute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert("hello world");
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));

import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";
// setup vars
const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/81PcDomicZL._UX300__PJprime-reading,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg",
  title: "The Giving Tree",
  author: "Shel Silverstein",
};
const secondBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/81n1G6Cp7wL._UX300__PJprime-reading,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg",
  title: "The Bad Seed",
  author: "Jory John",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          incidunt eos amet quae eius ex, ipsum earum similique nobis quos!
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));

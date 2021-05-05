import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
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
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/81PcDomicZL._UX300__PJprime-reading,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg"
      alt=""
    />
  );
};

const Title = () => <h1>The Giving Tree</h1>;
const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    Shel Silverstein
  </h4>
);

ReactDom.render(<BookList />, document.getElementById("root"));

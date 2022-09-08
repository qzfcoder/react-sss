import React, { PureComponent, Component } from "react";
import "./style.css";
export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        { name: "qwe", price: 12, count: 1 },
        { name: "asd", price: 14, count: 2 },
        { name: "zxc", price: 16, count: 3 },
        { name: "123", price: 18, count: 4 },
      ],
    };
  }
  handleBook() {
    console.log(1);
    const newBook = {
      name: "456",
      price: 20,
      count: 5,
    };
    // pureComponent该方法界面不会改变 Component使用的时候可以添加
    // this.state.books.push(newBook);
    // this.setState({ books: this.state.books });
    this.setState({ books: [...this.state.books, newBook] });
  }
  addBookCount(e, f) {
    const books = [...this.state.books];
    books[f].count++;
    this.setState({ books: books });
  }
  render() {
    const { books } = this.state;
    return (
      <div>
        <ul>
          {books.map((book, index) => {
            return (
              <li key={index}>
                <span>
                  {" "}
                  {book.name} - {book.price} - {book.count}
                </span>
                <button
                  onClick={(e) => this.addBookCount(e, index)}
                  className="btn"
                >
                  +1
                </button>
              </li>
            );
          })}
        </ul>
        <button onClick={(e) => this.handleBook()} className="btn">
          +1
        </button>
      </div>
    );
  }
}

export default App;

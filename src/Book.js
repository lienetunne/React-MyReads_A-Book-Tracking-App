import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger'

class Book extends Component{
  render(){
    let displayedThubnail = this.props.book.imageLinks ?
    this.props.book.imageLinks.thumbnail : '';
    const book = this.props.book
    return(
      <li key={this.props.book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128,
              height: 193,
              backgroundImage: `url("${displayedThubnail})"` }}></div>
                <ShelfChanger
                  book = {book}
                  books = {this.props.books}
                  moveShelf={this.props.moveShelf}
                  currentShelf={this.props.book.shelf}
                />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
  }
}
export default Book

import React, { Component } from 'react';
import Book from './Book'

class Shelf extends Component{
  render(){
    const books = this.props.books
    return(
      <ol className="books-grid">
        {books.map(book =>(
                <Book
                  book={book}
                  books={books}
                  moveShelf={this.props.moveShelf}
                  key={book.id}
                />
            ))
        }
      </ol>
    )
  }
}
export default Shelf

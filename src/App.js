import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import AllBooks from './AllBooks'
import BookSearch from './BookSearch'

class BooksApp extends React.Component {
  state = {
    books: []
  }
// get all books
  componentDidMount() {
    BooksAPI.getAll().then((books)=>{
      this.setState({books: books})
    })
  }
// to set
moveShelf=(theBook, theShelf)=>{
  BooksAPI.update(theBook, theShelf).then(response =>{
    // set shelf
    theBook.shelf = theShelf
    // filter books if id are the same
    let filteredBooks = this.state.books.filter( book => book.id !== theBook.id )
    // push books to an array
    filteredBooks.push(theBook);
    this.setState({ books: filteredBooks })
  })
}
  render() {
    return (
      <div className="app">
              <Route exact  path="/" render={() => (
                <div className="list-books">
                  <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <AllBooks
                   books={this.state.books}
                   moveShelf={this.moveShelf}
                 />
                 <div className="open-search">
                   <Link to="/search">Search</Link>
                 </div>
               </div>
              )} />
              <Route path="/search" render={({history})=>(
                <BookSearch
                  moveShelf={this.moveShelf}
                  books={this.state.books}
                />
              )}/>



      </div>
    )
  }
}

export default BooksApp

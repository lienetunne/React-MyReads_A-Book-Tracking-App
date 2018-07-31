import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import AllBooks from './AllBooks'
import BookSearch from './BookSearch'

class BooksApp extends React.Component {


  render() {
    return (
      <div className="app">

          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>

      </div>
    )
  }
}

export default BooksApp

import React, { Component } from 'react';
import Book from './Book'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import sadFace from './icons/sad_face.ico'

class BookSearch extends Component{
  state ={
    query:'',
    theBook:[],
    hasError: false,
    searchSomething:true
  }

  updateQuery=(query)=>{
    this.setState({query: query.trim()})
    this.getSearchedBooks(query);
  }

  getSearchedBooks=(query)=>{
    // if someone searches a book
    if(query){
      BooksAPI.search(query).then((theBook)=>{
        // if there is an error => show no book but show error message
        if(theBook.error){
          this.setState({ theBook: [], hasError:true, searchSomething:false});
          // if theres no error => show the searched books
        }else{
          this.setState({theBook:theBook, hasError:false, searchSomething:false})
        }
      })
      // if no one is searching a book => dont show books
    }else{
      this.setState({theBook: [], hasError:false, searchSomething:true});
    }
  }

  render(){
    const books = this.props.books

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">

            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event)=>this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {this.state.theBook.map((book) =>(
                  <Book
                    book={book}
                    books={books}
                    moveShelf={this.props.moveShelf}
                    key={book.id}
                  />
              ))
          }
          {this.state.hasError && (
            <div>
             <h2>Theres no books for <i>"{this.state.query}"</i>, please try again later!</h2>
             <h4><img src={sadFace}  alt="sadFace" url="https://icons8.com/"/></h4>
            </div>
          )}
          {this.state.searchSomething && (
             <h2>What do you want to read?</h2>
          )}
          </ol>
        </div>
      </div>
    )
  }
}
export default BookSearch

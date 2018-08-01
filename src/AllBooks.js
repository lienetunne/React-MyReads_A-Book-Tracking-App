import React, { Component } from 'react';
import Shelf from './Shelf'

class AllBooks extends Component{
  render(){
    const books=this.props.books
    const shelfs =[
      {shelfType: 'currentlyReading', title:'Currently Reading'},
      {shelfType: "wantToRead", title:'Want to read'},
      {shelfType: "read", title:'Read'}
    ]

    return(

          <div className="list-books-content">
            <div>
              {shelfs.map((type, shelfTitle)=>{
                const bookShelfs=books.filter(book=> book.shelf === type.shelfType)
                const numberOfBooks = bookShelfs.length;
                return(
                  <div className="bookshelf" key={shelfTitle}>
                    <h2 className="bookshelf-title">{type.title}: {numberOfBooks}</h2>
                    <div className="bookshelf-books">
                        <Shelf
                          books= {bookShelfs}
                          moveShelf={this.props.moveShelf}
                        />
                      </div>
                  </div>
                )
              })}
            </div>
          </div>

    )

  }
}
export default AllBooks

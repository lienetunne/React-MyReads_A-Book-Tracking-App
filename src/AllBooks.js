import React, { Component } from 'react';
import Shelf from './Shelf'

class AllBooks extends Component{
  render(){
    return(
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">

            </div>
          </div>


        </div>
      </div>
    )
  }
}
export default AllBooks

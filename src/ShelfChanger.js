import React, { Component } from 'react';

class ShelfChanger extends Component{

  render(){
    const { book, books } = this.props
    // none for all searched books
    let currentShelf = 'none'
  // set shelf
    for (let item of books ) {
      if (item.id === book.id)  {
        currentShelf = item.shelf
      // stop the loop
        break
      }
    }

    return(
      <div className="book-shelf-changer">
        <select
          onChange={(event) => this.props.moveShelf(
            book, event.target.value
          )}
          value={currentShelf}
        >
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}
export default ShelfChanger

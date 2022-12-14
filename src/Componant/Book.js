import React from 'react'

export default function Book({book ,updateShelf}) {
 

  ;
  return (
    <>
    <div>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage:
                  book.imageLinks ? 
                  `url(${
                    book.imageLinks.smallThumbnail
                  })`
                  :
                  ""
                }}
              ></div>
              <div className="book-shelf-changer">
                <select   onChange={(e)=>updateShelf(book, e.target.value)}   defaultValue={book.shelf ? book.shelf : "none"}>
                  <option value="none" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">
                    Currently Reading
                  </option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
          </div>
        </div>
    </>
  )
}

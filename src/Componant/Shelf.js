import React from 'react'
import Book from './Book'

export default function Shelf({books ,section ,category ,updateShelf}) {

    const booksCategory = books.filter((book)=> book.shelf === category)
  return (
    <div className="bookshelf">
    <h2 className="bookshelf-title"> {section} </h2>
    <div className="bookshelf-books">
      <ol className="books-grid">

      {booksCategory.map((book)=>(
    <Book key={book.id} book={book} updateShelf={updateShelf} />
        ))}
   
        
      </ol>
    </div>
  </div>
  )
}

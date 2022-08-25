import React from 'react'
import { Link } from 'react-router-dom';
import Shelf from './Shelf'




export default function Home({books ,updateShelf}) {

  return (
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
       <Shelf  section='Currently Reading' books={books} category="currentlyReading" updateShelf={updateShelf} />
       <Shelf section='Want To Read' books={books} category="wantToRead"  updateShelf={updateShelf} />
       <Shelf   section='Read' books={books} category="read"   updateShelf={updateShelf}/>
        
       
  
      </div>
      <div className="open-search">
                <Link to="/search">
                  <button>Add a book</button>
                </Link>
              </div>
    </div>
    
     
    
  </div>
  

  )
}

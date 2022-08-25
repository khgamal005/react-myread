import "./App.css";
import React, { useState ,useEffect } from "react";
import { Route, Routes, Link } from 'react-router-dom';
import Home from "./Componant/Home";
import * as BooksAPI from "./BooksAPI";
import Book from "./Componant/Book";

function App() {
  const [books, setbooks] = useState([])
  const [query, setquery] = useState('')
  const [booksFormSearch, setbooksFormSearch] = useState([])
  const [isbook, setisbook] = useState(new Map());
  const [allbooks, setallbooks] = useState([]);


 async function get(){
    let res = await BooksAPI.getAll() 
     setbooks(res)
     setisbook(createListBooks(res))
  }
  
 async function updateShelf(book ,shelf){
     await BooksAPI.update(book , shelf) 
    let res = await BooksAPI.getAll() 
    setbooks(res)

  }

const getSearch = async(query)=>{
  let data =await  BooksAPI.search(query)
  if(query)
  if(data.error){
            setbooksFormSearch([])
          }else{
           
              setbooksFormSearch(data)
            
          }
            }
      
  // useEffect(()=>{
  //   let isSearch = true
  //   if(query){
  //     BooksAPI.search(query).then(result=>{
  //       if(result.error){
  //         setbooksFormSearch([])
  //       }else{
  //         if(isSearch){
  //           setbooksFormSearch(result)
  //         }
  //       }
  //     })
  //   }
  
  //   return()=>{
  //     isSearch =true;
  //     setbooksFormSearch([])
  //   }
  // },[query])

 
useEffect(() => {
  get()
  getSearch(query)

}, [query])

const createListBooks = (books) => {
  const maping = new Map();
  books.map(book => maping.set(book.id, book));
  return maping;
}

useEffect(() => {

  const getAllBooks = booksFormSearch.map(book => {
    if (isbook.has(book.id)) {
      return isbook.get(book.id);
    } else {
      return book;
    }
  })
  setallbooks(getAllBooks);
}, [isbook, booksFormSearch])



  return (
<Routes>

<Route path='/search' element={
            <div className="search-books">
              <div className="search-books-bar">
                <Link to="/">
                  <button className="close-search">Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author"value={query}  onChange={(e) => setquery(e.target.value)} />
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                  {allbooks.map(booking => (
                    <li key={booking.id}>
                      <Book book={booking}  updateShelf={updateShelf} />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          }/>

<Route path="/" element={<Home books={books}  updateShelf={updateShelf} />


}> </Route>

      </Routes>
         
      
  );
}

export default App;

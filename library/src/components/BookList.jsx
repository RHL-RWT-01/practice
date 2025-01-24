import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
function BookList() {
    const books=useSelector(state=>state.booksReducer.books)
    const action=useDispatch()
 return (
    <>
     <h2>Book List</h2>
     {
         books.map(book=>(
             <div key={book.id}>
                 <h3>{book.title}</h3>
                 <p>{book.author}</p>
             </div>
         ))
     }
    </>
  )
}

export default BookList
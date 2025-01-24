import React from 'react'
import { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
function BookForm() {
    const [title,setTitle]=useState('')
    const [author,setAuthor]=useState('')
    const [id,setId]=useState('')
    const [isRead, setIsRead]=useState(false)

    const books=useSelector(state=>state.booksReducer.books)
    const action=useDispatch()

  return (
    <>
    <h3>AddBooks</h3>
    <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter Book Title" />
    <input onChange={(e)=>setAuthor(e.target.value)} type="text" placeholder="Enter Book Author" />
    <input  onChange={(e)=>setId(e.target.value)}
     type="text" placeholder="Enter Book ID" />
    <input
     type="checkbox" /> Mark as Read
    <br/>
    <br/>
    <button >Add Book</button>
    </>
  )
}

export default BookForm
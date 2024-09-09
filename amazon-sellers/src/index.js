import './index.css'
import ReactDOM from 'react-dom/client'
import React from 'react'
import { booksObj } from './books'
import Book from './Book'

const Booklist = () => {
  return (
    <section className='booklist'>
      {booksObj.map((book) => {
        return <Book key={book.id} {...book} number={id}></Book>
      })}
    </section>
  )
}

export default Booklist

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist></Booklist>)

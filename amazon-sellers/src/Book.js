const Book = ({ src, title, desc, author, number }) => {
  return (
    <div className='book'>
      <img src={src}></img>
      <h2>{title}</h2>
      <h2>{desc}</h2>
      <h4>{author}</h4>
      <span>{`#${number}`}</span>
    </div>
  )
}
export default Book

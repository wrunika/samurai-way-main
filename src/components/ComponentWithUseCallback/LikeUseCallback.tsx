import React, {useCallback, useMemo, useState} from 'react';

export const LikeUseCallback = () => {
    let [counter, setCounter] = useState(0);
    const [books, setBooks] = useState<string[]>(['HTML', 'CSS', 'JS']);

    const increaseCounter = () => {
      setCounter(counter+=1)
    }
    const filteredBooks = useMemo(() => {
        return books.filter(b => b.length > 2)}, [books]);

    const addBook = useMemo(()=> () => {
      setBooks([...filteredBooks, 'React'])
    }, [books])
    const addBook2 = useCallback(() => {
        setBooks([...filteredBooks, 'React'])
    }, [books])

  return(
      <div>
          <h5>{counter}</h5>
          <button onClick={increaseCounter}>+</button>
          <p>I have {books.length} books</p>
          <Books addBook={addBook2} books={filteredBooks} />
      </div>
  )
}

type BooksPropsType = {
    books: string[]
    addBook: ()=>void
}
const Books = React.memo((props: BooksPropsType) => {
    console.log('+ book')
  return(
      <div>
          <button onClick={props.addBook}>add book</button>
      </div>
  )
})
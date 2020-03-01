import React, {useState, useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const {dispatch} = useContext(BookContext);
    const [title, setTitle]= useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "ADD_BOOK", book: {
            title
        }});
        setTitle('');
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="Enter the title of the book" value={title} required/>
            <input type="submit" value="Add book"/>
        </form>
     );
}
 
export default BookForm;
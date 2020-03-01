import React, {useContext} from 'react';
import {ThemeContext} from './../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const {books} = useContext(BookContext);
    const theme = isLightTheme ? light : dark;
    const {dispatch} = useContext(BookContext);
    return ( 
        <div className='book-list' style={{color: theme.syntax, background: theme.bg}}>
            <ul>
                {books.map(book =>{
                    return ( <li onClick={()=>dispatch({type: "REMOVE_BOOK", id: book.id})} key={book.id} style={{background: theme.ui}}>{book.title}</li>)
                })}
            </ul>
        </div>
        );
}
 
export default BookList;
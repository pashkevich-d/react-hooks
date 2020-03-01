import React, {createContext, useReducer, useEffect} from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [
        {title: "Idiot", id: 1},
        {title: "War and Peace", id: 2},
        {title: "The Brothers Karamazov", id: 3}
    ], ()=> {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [{title: "Idiot", id: 1},
        {title: "War and Peace", id: 2},
        {title: "The Brothers Karamazov", id: 3}];
    });
    useEffect(()=> {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books]);
    return ( 
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;


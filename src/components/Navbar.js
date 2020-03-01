import React, {useContext} from 'react';
import {ThemeContext} from './../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const { isLightTheme, light, dark} = useContext(ThemeContext);
    const { isAuthenticated, toggleAuth} = useContext(AuthContext);
    const {books} = useContext(BookContext);
    const theme = isLightTheme ? light : dark;

    return (
        <nav style={{background: theme.ui, color: theme.syntax}}>
            <h1>My reading list</h1>
            <p>Currently you have {books.length} books to get through ... </p>
            <div onClick={toggleAuth}>{isAuthenticated ? 'Logged in' : 'Logged out'}</div>
        </nav>
    )
}
 
export default Navbar;
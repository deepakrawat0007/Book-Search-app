import React from 'react';
import headerImg from "../images/header.jpg"
import "./header.css"

const Header = () =>{
    return (
        <>
        <div className='header-wrapper'>
            <img src={headerImg} alt="header" width="100%" height="90vh"/>
            <h1>BOOK SEARCH</h1>
        </div>
        </>
    )
}

export default Header
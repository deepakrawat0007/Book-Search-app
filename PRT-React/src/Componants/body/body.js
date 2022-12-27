import React, { useEffect, useState } from 'react';
import Header from '../header/header';

import {FaSearch} from "react-icons/fa";
import axios from "axios"
import "./body.css"

const URL = "https://www.googleapis.com/books/v1/volumes?q=%7B"

const Body = () =>{
    const [initLoad , setLoad] = useState(false)
const [ data , setData] = useState([])
const [title , setTitle] = useState()
const [search , setSearch] = useState()
useEffect(()=>{
    if(initLoad){
    axios.get(URL+title).then((res)=>{
        console.log(res.data.items)
        setData(res.data.items)
    }).catch((e)=>{
        console.log(e.message)
    })
}
},[search]) 
    // console.log(data)
    const handleChange = (e) =>{
        setTitle(e.target.value)
    }
    const handleSearch = ()=>{
        setLoad(true)
           setSearch(title)
    }


    return (
        <>
        <Header/>
        <div className='body-wrapper'>
            <input type="text" onChange={(e)=>{handleChange(e)}} id='title'placeholder='Search for Book title' />
            <button onClick={handleSearch}><FaSearch/></button>
        <div>
            {data.map((infos , idx)=>(
                <div className='books-shelf'>                    
               
               <a href={infos.volumeInfo.previewLink}> <img className='books-img' width="200px" height="200px" src={infos.volumeInfo.imageLinks.thumbnail} 
               /></a>
                </div>
            ))}
        </div>
        </div>
        </>
    )
}

export default Body;
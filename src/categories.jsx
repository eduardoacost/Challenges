import PropTypes from 'prop-types';
import {useState} from 'react';

export const ComponentApp = ({onAddCategory}) => {
const [category, setCategory] =useState('first category', 'second category')

const onSetCategory = (event) =>{

    setCategory(event.target.value)
}
    return (
        <>
         
        
       
        
        <h1>GifExpert</h1>
        <input type = 'text' value={category} onChange={(event)=>onSetCategory(event) } />
        <button onClick={()=>onAddCategory(category)}>add category</button>


        </>
    )
}
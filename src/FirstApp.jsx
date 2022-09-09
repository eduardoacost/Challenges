import PropTypes from 'prop-types';
import {useState} from 'react';
import { useCounter } from './Counter';


const FirstApp = ({value}) => {
    const {counter,
        handleAdd,
        handleSubstract,
        handleReset} = useCounter(0)
    return(
        <>
            <h1>Counter</h1>
            <span>{counter}</span>
            <button onClick={()=>handleAdd()}>mas</button>
            <button onClick={()=>handleSubstract()}>menos</button>
            <button onClick={()=>handleReset()}>reset</button>
        </>
    )
    
    
}
// FirstApp.propTypes ={
//     title : PropTypes.string.isRequired,
//     sum : PropTypes.number.isRequired

// }
// FirstApp.defaultProps={
//     title: "dahalakdasljdla",
//     sum: 300
// }

export{FirstApp}
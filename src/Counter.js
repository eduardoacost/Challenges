import { useState } from "react";

export const useCounter = (value) => {
    const [ counter, setCounter] = useState(value);
    const handleAdd= (valueI = 1) => {
        setCounter( counter + valueI)
        // value++
        // console.log('calling HandleAdd',value)
    }
    const handleSubstract= (valueI = 1) => {
        if(counter >0){
            setCounter( counter - valueI)
        }else{
            setCounter (value)
            console.log('no se puede restar')
        }
        
        // value++
        // console.log('calling HandleAdd',value)
    }
    const handleReset= () => {
        setCounter( value)
        // value++
        // console.log('calling HandleAdd',value)
    }

    return {
        counter,
        handleAdd,
        handleSubstract,
        handleReset
    }
    
}
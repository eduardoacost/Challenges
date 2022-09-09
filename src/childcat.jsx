import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";
export const GifExpertApp = () =>{
    const[categories, setCategories] = useState(['first category'])

    const onAddCategory = (category) =>{
        setCategories(list => [...list,category])
    }
    return(
        <>
            <h1>GifExpert</h1>
            <AddCategory  onAddCategory={onAddCategory}/>
            <ol>
                (
                    {categories.map(
                        (category, key) =>{
                            return<GifGrid key={key} category={category}/>
                       }
                        
                    )}
                       
                       
                        
                       
                    
                )

            </ol>

        </>
    )
}
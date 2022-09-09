import { useEffect } from "react"
import { getGifs } from "./Getgifs"
import { useGifs } from "./UseFgifs"
import { GigItm } from "./GitItems"


export const  GifGrid = ({category}) =>{
   const {images,isLoading} = useGifs(category)
return(
    <>
    <h3>{category}</h3>
    <div className="card-grid">
        {
            images.map((image,key) => {
                return <GigItm key={key} {...image}></GigItm>
            }) 
                
            
        }
    </div>
    
    </>
)
    

}
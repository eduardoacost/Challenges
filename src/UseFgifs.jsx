import {useEffect,useState} from "react"
import { getGifs } from "./Getgifs"

export const useGifs = (category) =>{
    const [img, setImg] = useState([])
    const getIMgs = async()=>{
        const img = await getGifs( category)
        setImg(img);
    }
    useEffect( () =>{
        getIMgs();
    }, [])

    return {
        images: img,
        isLoading: false
    }
}
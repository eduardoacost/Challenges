import { getGifs } from "./Getgifs";
import PropTypes from 'prop-types'

export const GigItm = (gifs) =>{
    return(
        <li>
            <div>
                 <a href={gifs.url} target = "_blank">{gifs.title}</a><br/>
                 <img src={gifs.url}></img><br/>
                 <p>ID:{gifs.id}</p><br/>
            </div>
        </li>
    )
}
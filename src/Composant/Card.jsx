import { useState } from "react"

function Card ({animal}) {


const [Choice,setChoice] = useState(false)

const handleClick= () => 
setChoice(!Choice)

const HandleMove = () =>
setChoice(!Choice)

    return(
    <>
        <div className="card">
            {Choice ? <p  className="choice">{animal.text}</p> : null}
            <img onMouseOver={handleClick} onMouseLeave={HandleMove} className="photo" src={animal.imgSrc}/>
            <p>{animal.name}</p>
        </div>
    </>
    )
}

export default Card
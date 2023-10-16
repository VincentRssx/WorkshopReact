import { useState } from "react"
function Nav ({allArray,catArray,dogArray,routeArray}) {

    const [Array, setArray] = useState(0);

    const handleClick = () => {
        setArray (Array +1)
    }
    const handleClickbefore = () => {
        setArray (Array -1)
    }


return(
<>
<section className="Nav">
    {Array > 0 ? <button onClick={handleClickbefore}>A Prendre !</button> : <bouton>Rupture</bouton>}
    {Array < allArray.length -1 ? <button onClick={handleClick} >A Sauver !</button> : <bouton>Trop Tard ... !</bouton> }

    
</section>
<section className="cards">
{allArray.map((toutArray) => {
    return(
    <div className="card">
        <img className="photo" src={toutArray[Array].imgSrc}/>
        <p>{toutArray[Array].name}</p>
        </div>
        )
})}
        </section>

        </>
)
}

export default Nav
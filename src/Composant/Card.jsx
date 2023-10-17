function Card ({animal}) {


    return(
    <>
        <div className="card">
            <img className="photo" src={animal.imgSrc}/>
            <p>{animal.name}</p>
        </div>
    </>
    )
}

export default Card
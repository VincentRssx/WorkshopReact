function Button({className, index, name, handleClick}) {

    return (
        <button className={className} onClick={() => handleClick(index)} >{name}</button>
    )
}

export default Button
import { useState } from "react"
import Button from "./Button"

function Nav({ buttonArray, setDisplayArray, animalArray }) {

    // Changement de l'index du bouton actif + changement du tableau à afficher
    function handleClick(index) {
        setActiveButtonIndex(index)
        setDisplayArray(animalArray[index])
    }

    // Index du bouton actif
    const [activeButtonIndex, setActiveButtonIndex] = useState(0)

    return (
        <>
            <section className="Nav">
                {buttonArray.map((button, index) => (
                    <Button className={index === activeButtonIndex ? "active" : ""} 
                    key={index} 
                    index={index} 
                    name={button} 
                    setDisplayArray={setDisplayArray} 
                    animalArray={animalArray} 
                    handleClick={handleClick} />
                ))}
            </section>

        </>
    )
}

export default Nav
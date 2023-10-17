import Nav from "./Nav"
import Card from "./Card"
import { useState } from "react"
function Body() {

    const animalArray = [

        [
            { name: "Panpan", imgSrc: "https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { name: "Punki", imgSrc: "https://images.pexels.com/photos/692071/pexels-photo-692071.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { name: "Civet", imgSrc: "https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { name: "Civet", imgSrc: "https://cdn.pixabay.com/photo/2018/05/11/08/11/dog-3389729_640.jpg" },
        ],

        [
            { name: "Tajine", imgSrc: "https://images.pexels.com/photos/1317844/pexels-photo-1317844.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { name: "Moustache", imgSrc: "https://images.pexels.com/photos/2173872/pexels-photo-2173872.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { name: "Silver", imgSrc: "https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=600" },
        ],

        [
            { name: "Ruby", imgSrc: "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { name: "Diez", imgSrc: "https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { name: "Voyou", imgSrc: "https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg?auto=compress&cs=tinysrgb&w=600" },
        ]
    ]

    // Noms des boutons
    const buttonArray = [
        "Août", "Septembre", "Octobre"
    ]

    // Tableau à afficher
    const [displayArray, setDisplayArray] = useState(animalArray[0]);

    return (
        <>
            <Nav buttonArray={buttonArray} setDisplayArray={setDisplayArray} animalArray={animalArray} />
            <div className="intro">
                <p className="textIntro">Il n'est pas trop tard pour l'un de ces {displayArray.length} animaux !</p>
            </div>
            <section className="cards">
                {displayArray.map((animal, index) => (
                    <Card key={index} animal={animal} />
                ))}
            </section>
        </>
    )
}

export default Body
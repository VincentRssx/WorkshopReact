import Nav from "./Nav";
import Card from "./Card";
import { useState } from "react";
function Body() {
  const animalArray = [
    [
      { name: "Panpan", imgSrc: "https://images.pexels.com/photos/4001296/pexels-photo-4001296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      {
        name: "Punki",
        imgSrc: "../src/assets/deaddog.jpg",
      },
      { name: "Saucisse", imgSrc: "https://images.pexels.com/photos/3104709/pexels-photo-3104709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      { name: "Civet", imgSrc: "../src/assets/deadcat.jpeg" },
    ],

    [
      { name: "Tajine", imgSrc: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      { name: "Moustache", imgSrc: "https://images.pexels.com/photos/2173872/pexels-photo-2173872.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { name: "Silver", imgSrc: "https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=600" },
    ],

    [
      { name: "Ruby", imgSrc: "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { name: "Diez", imgSrc: "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      { name: "Voyou", imgSrc: "https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg?auto=compress&cs=tinysrgb&w=600" },
    ],

    [
      { name: "Tajine", imgSrc: "https://images.pexels.com/photos/1317844/pexels-photo-1317844.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { name: "Moustache", imgSrc: "https://images.pexels.com/photos/4492260/pexels-photo-4492260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      { name: "Silver", imgSrc: "https://images.pexels.com/photos/14721098/pexels-photo-14721098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    ],
  ];

  // Noms des boutons
  const buttonArray = ["Juillet", "Août", "Septembre", "Octobre"];

  // Tableau à afficher
  const [displayArray, setDisplayArray] = useState(animalArray[0]);

  return (
    <>
      <Nav buttonArray={buttonArray} setDisplayArray={setDisplayArray} animalArray={animalArray} />
      <p>Il n'est pas trop tard pour l'un de ces {displayArray.length} animaux !</p>
      <section className="cards">
        {displayArray.map((animal, index) => (
          <Card key={index} animal={animal} />
        ))}
      </section>
    </>
  );
}

export default Body;

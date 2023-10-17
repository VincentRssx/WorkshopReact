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
        { name: "Panpan", imgSrc: "https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&w=600", text:"choice me", },
        { name: "Punki", imgSrc: "https://images.pexels.com/photos/692071/pexels-photo-692071.jpeg?auto=compress&cs=tinysrgb&w=600", text:"No, choice me !" },
        { name: "Civet", imgSrc: "https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=600", text:"Realy, I'm better" },
        { name: "Civet", imgSrc: "https://cdn.pixabay.com/photo/2018/05/11/08/11/dog-3389729_640.jpg", text:"I'm just a perfect dog" },
    ],

    [

        { name: "Tajine", imgSrc: "https://images.pexels.com/photos/1317844/pexels-photo-1317844.jpeg?auto=compress&cs=tinysrgb&w=600",text:"I'm a cut cat" },
        { name: "Moustache", imgSrc: "https://images.pexels.com/photos/2173872/pexels-photo-2173872.jpeg?auto=compress&cs=tinysrgb&w=600",text:"red Cat" },
        { name: "Silver", imgSrc: "https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=600",text:"No, Choice me, serious cat"},
    ],

    [

        { name: "Ruby", imgSrc: "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=600",text:"take me, white dog"},
        { name: "Diez", imgSrc: "https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?auto=compress&cs=tinysrgb&w=600",text:"No, Brown is better" },
        { name: "Voyou", imgSrc: "https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg?auto=compress&cs=tinysrgb&w=600",text:"No !, please Help me" },
    ]
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
  );
}

export default Body;

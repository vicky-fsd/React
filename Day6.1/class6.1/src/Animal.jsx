import React from 'react'
import {useParams} from 'react-router-dom'

function Animal() {
    const {name} = useParams ();
    const animalInfo ={
        dog : "Dogs are Friendly and Loyal.",
        cat : "Cats are Indepentent and Playful.",
        rabbit : "Rabbits are cute and fulfy."
    };
    const info = animalInfo [name] || "Animal Info not Found";

    return (
    <div>
        <h2>
            {name.charAt(0).toUpperCase() + name.slice(1)}
        </h2>
        <p>{info}</p>
    </div>
  )
}

export default Animal
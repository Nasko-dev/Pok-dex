import React, { useEffect, useState } from "react"; // Assure-toi d'importer useState
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);

  const [pokemonIndex, setPokemonIndex] = useState(0); // Initialisation du state pokemonIndex

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  return (
    <div className="Test">
      {/* Passer setPokemonIndex et pokemonList à NavBar */}
      <NavBar setPokemonIndex={setPokemonIndex} pokemonList={pokemonList} />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}

export default App;

import React from "react";

interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

const Navbar: React.FC<NavBarProps> = ({ setPokemonIndex, pokemonList }) => {
  const handleClick = (index: number) => {

    setPokemonIndex(index);
    if (pokemonList[index].name === "pikachu") {
      alert("pika pikachu !!!");
    }
  };

  return (
    <nav>
      {pokemonList.map((pokemon, index) => (
        <button key={pokemon.name} onClick={() => handleClick(index)}>
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
